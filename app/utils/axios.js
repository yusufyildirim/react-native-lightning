import { Platform } from 'react-native';
import axios from 'axios';
import { constants } from 'resources';
import loading from './loading';
import serviceErrorHandler from './serviceErrorHandler';

const instance = axios.create({
  baseURL: constants.baseServiceUrl,
  timeout: constants.serviceTimeout,
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

/* ********** REQUEST INTERCEPTOR  ********** */
function onRequest(config) {
  if (!config.headers.NO_LOADING) loading.show();

  return config;
}

function onRequestFailed(error) {
  loading.hide();

  return Promise.reject(error);
}

/* ********** REQUEST INTERCEPTOR  ********** */
function onRequest(config) {
  if (!config.headers.NO_LOADING) loading.show();

  return config;
}

function onRequestFailed(error) {
  loading.hide();

  return Promise.reject(error);
}

/* ********** RESPONSE INTERCEPTOR  ********** */
function onResponse(response) {
  loading.hide();

  return response;
}

function onResponseFailed(error) {
  loading.hide();

  return Promise.reject(error);
}

instance.interceptors.request.use(onRequest, onRequestFailed);
instance.interceptors.response.use(onResponse, serviceErrorHandler);


export default instance;
