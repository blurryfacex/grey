import io from 'socket.io-client';

// config
import { socketUrl } from '../../../config';

// redux actions
// import { loadUnreadCount, cancelNotiaction } from '../store/actions/notification';
import { setOnlineUserCount } from '../store/actions/website';
import { getAccessToken } from '../store/reducers/user';

import { loadTips } from '../store/actions/tips';
import { updateSession } from '../store/actions/session';
import { addMessagesToList } from '../store/actions/message';

let socket;

export const connect = function ({ dispatch, getState }) {

  // 用于判断是否登录
  const me = getState().user.profile;
  const accessToken = getAccessToken(getState());

  const handleActions = function(action, params = null) {
    action(params)(dispatch, getState);
  }
  
  const handleNotification = (notification) => {

    try {
      notification = JSON.parse(notification);
    } catch (err) {
      notification = null;
      console.log(err);
    }
  
    if (!notification || !notification.type) return;
  
    const { type, data } = notification;
  
    switch (type) {
      // 有新通知
      case 'notification':
        // handleActions(loadUnreadCount);
        handleActions(loadTips);
        break;
      case 'new-feed':
        handleActions(loadTips);
        break;
      case 'recommend-posts':
        handleActions(loadTips);
        break;
      // case 'new-message':
        // console.log('新消息');
        // handleActions(loadTips);
        break;
      case 'new-session':
        handleActions(loadTips);
        handleActions(updateSession, data.sessionId);
        handleActions(addMessagesToList, data);
        break;
    }

  }

  socket = io(socketUrl, {
    // 是否自动重新连接
    reconnection: true,
    // 自动重连10次后放弃
    reconnectionAttempts: 15,
    // 自动重连间隔时间
    reconnectionDelay: 3000,
    // 发送参数给服务器，服务端获取参数 socket.handshake.query
    query: {
      accessToken
    }
  });

  socket.on("connect", function() {

    console.log('socket connect success.');
    
    // 更新在线用户
    this.on("online-user", function(res) {
      handleActions(setOnlineUserCount, res);
    });
    
    // 与用户自己相关的消息
    if (me) this.on(me._id, handleNotification);
    // 会员消息
    if (me) this.on('member', handleNotification);    

  });

  // 如果断开了连接，尝试重新连接
  socket.on('disconnect', function() {
    console.log('socket has disconnect.');
  });

  // 加载未读消息、通知、等等红点提醒
  if (me && me._id) {
    handleActions(loadTips);
  }

}

// 关闭 socket
export const close = () => {
  if (socket) {
    socket.close();
    socket = null;
  }
}