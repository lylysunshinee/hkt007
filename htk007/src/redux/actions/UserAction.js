export const User_Login = 'User_Login';
export const User_Login_Success = 'User_Login_Success';
export const User_Login_Failed = 'User_Login_Failed';

import { API } from '@network';
import { AccessTokenManager } from '@data';

//Add Action
export function loginAcitonSuccess(data) {
    return {
        type: User_Login_Success,
        data
    };
}

export function loginAcitonFailed(error) {
    return {
        type: User_Login_Failed,
        error
    };
}

export function loginAction(params) {
    return (dispatch) => {
        API.login(params).then(
            (res) => {
                if (res.data.code == 200) {
                    AccessTokenManager.saveAccessToken(res.data.token)
                    dispatch(loginAcitonSuccess(res.data));
                    return;
                } else {
                    dispatch(loginAcitonFailed(res.data));
                    return;
                }
            },
            (err) => {
                dispatch(loginAcitonFailed(err));
            }
        )

    }
};

export function verifyToken() {
    return (dispatch) => {
        API.verifyToken().then(
            (res) => {
                return dispatch(loginAcitonSuccess(res.data));
            },
            (err) => {
                dispatch(loginAcitonFailed(err));
            }
        )

    }
};


