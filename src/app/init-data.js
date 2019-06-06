import { loadTopicList } from '@actions/topic'
import { loadUserInfo } from '@actions/user'

export default (store, accessToken) => {
  return new Promise(async resolve => {
    await loadTopicList({
      id: 'recommend-topics',
      filters: { variables:{ types: 'parent', recommend: true, sort_by: 'sort: -1' } }
    })(store.dispatch, store.getState)

    if (accessToken) {
      let res = await loadUserInfo({ accessToken })(store.dispatch, store.getState)
      resolve(res)
    } else {
      resolve([])
    }
  })
}