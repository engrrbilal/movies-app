import axios from 'axios';
import queryString from 'query-string';
import { API_KEY } from '../../constants/config';
import { LocalStorageService } from '../local-storage';
import './interceptors';


const localStorageService = new LocalStorageService();

export class HttpService {
  getTimeOutDuration() {
    // all api calls will be timeout
    // if server didn't responsed in 15 seconds
    const timeOutDuration = 15000;
    return timeOutDuration;
  }

  async getHeaders(options) {
    let headers = {};

    // eslint-disable-next-line prefer-destructuring
    if (options && options.headers) {
      const {headers: customHeaders} = options;
      headers = customHeaders;
      // return headers;
    }

    // const token = await localStorageService.fetch('authToken');
    // if (token && typeof token === 'string' && !headers.Authorization) headers.Authorization = token;

    if (!headers['Content-Type']) {
      headers['Content-Type'] = 'application/json';
    }

    // prevent axios from caching the API data
    // headers['Cache-Control'] = 'no-cache';
    return headers;
  }


  async get(
    url,
    queryParams={},
    options,
    timeOut,
  ){
    const headers = await this.getHeaders(options);
    queryParams['api_key'] = API_KEY;
    return axios.get(url, {
      params: queryParams,
      paramsSerializer: (params) => {
        return queryString.stringify(params);
      },
      headers,
      timeout: timeOut ? timeOut : this.getTimeOutDuration(),
    });`${BASE_URL}/trending/all/day`
  }

  async post(url, postData, options, timeOut){
    const headers = await this.getHeaders(options);
    return axios.post(url, postData, { headers, timeout: timeOut ? timeOut : this.getTimeOutDuration() });
  }

  async put(url, postData, queryParams = null,
    options,
    timeOut,
  ){
    const headers = await this.getHeaders(options);

    return axios.put(url, postData, {
      params: queryParams,
      paramsSerializer: function (params) {
        return queryString.stringify(params);
      },
      headers,
      timeout: timeOut ? timeOut : this.getTimeOutDuration(),
    });
  }

  async patch(url, postData, options, timeOut){
    const headers = await this.getHeaders(options);

    return axios.patch(url, postData, { headers, timeout: timeOut ? timeOut : this.getTimeOutDuration() });
  }

  async delete(url, options, timeOut,){
    const headers = await this.getHeaders(options);

    return axios.delete(url, { headers, timeout: timeOut ? timeOut : this.getTimeOutDuration() });
  }
}
