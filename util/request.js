import {message} from 'antd'
import co from 'co'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  return co(function* () {
    const response = yield fetch(url, options)
    if (response.status >= 400) {
      throw response
    }
    let res = yield response.json();
    if (res.code === 200) {
      return res.data
    }
    throw res
  })

}
