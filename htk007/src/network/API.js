import axios from 'axios';

import * as UnauthorizeInterceptor from './interceptors/unauthorize.js';
import * as LogInterceptor from './interceptors/log';
import * as AccessTokenInterceptor from './interceptors/accessToken';
import { LocalStorage } from '@data';
import { AppConfig } from '@constant';
import _ from 'lodash';

const getInstance = () => {
    const instance = axios.create({
        baseURL: AppConfig.API_BASE_URL,
        timeout: 30000,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    instance.interceptors.response.use(
        UnauthorizeInterceptor.onFullfilled,
        UnauthorizeInterceptor.onRejected,
    );

    instance.interceptors.request.use(
        LogInterceptor.requestLog,
        LogInterceptor.requestError,
    );

    instance.interceptors.response.use(
        LogInterceptor.responseLog,
        LogInterceptor.responseError,
    );

    instance.interceptors.request.use(
        AccessTokenInterceptor.addAccessToken,
        AccessTokenInterceptor.onRejected
    );
    return instance;
}
const API = { instance: getInstance() };


API.xample = () => {
    return API.instance.get('https://api.github.com/users/defunkt')
}

API.login = (params) => {
    return API.instance.post('/v1/user/authenticate', params)
}

API.checking = (params) => {
    return API.instance.post('/v1/checking/create', params)
}

API.logout = () => {
    return API.instance.get('portal/logout')
}

API.getcheckin = () => {
    return API.instance.get('/v1/checking/get-check-in')
}

API.findEmploy = (params) => {
    return API.instance.post('/v1/checking/find-employee/', params)
}

/* Export Component ==================================================================== */
export default API;

