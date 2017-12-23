import axios from 'axios';
import store from 'app/redux/store';
import { constants } from 'resources';
import { refreshToken } from 'services';
import { doRefreshToken } from 'ducks/auth';

const instance = axios.create({
  baseURL: constants.baseServiceURL,
  timeout: constants.serviceTimeout
});

instance.defaults.headers.common.Authorization = '';
instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
instance.defaults.timeout = constants.serviceTimeout;

// Interceptor example for refresh token logic

/*instance.interceptors.response.use(undefined, error => {
  // Do something with request error
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;

    return refreshToken()
      .then(({ data }) => {
        store.dispatch(doRefreshToken(data.access_token, data.refresh_token));
        instance.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
        originalRequest.headers.Authorization = `Bearer ${data.access_token}`;

        return axios(originalRequest);
      })
      .catch(err => {
        //console.warn(err);
      });
  }

  return Promise.reject(error);
});*/

export default instance;

export function setToken(token) {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}
