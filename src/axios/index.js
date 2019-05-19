import jsonP from 'jsonp'
import axios from 'axios'

export default class Axios {
  static ajax(options) {
    return Promise((resolve, reject) => {
      let baseApi = 'http://localhost/'
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseApi
      })
    })
  }
}