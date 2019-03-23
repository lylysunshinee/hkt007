import { Actions } from 'react-native-router-flux';
import { AccessTokenManager } from '@data';
import { Alert } from 'react-native';

const UnauthorizeStatusCode = 401;
  const LoginScene = 'login';
  const MaintainStautusCode = 500;
  const  Off_Server = 503;
const MaintenanceScene = 'maintenance';

export function onFullfilled(response) {
  return Promise.resolve(response);
}

export function onRejected(error) {
  if (error) {
    const config = error.config;
    const response = error.response;
    if (response && Actions.currentScene !== LoginScene && UnauthorizeStatusCode == response.status) {
      Actions.reset(LoginScene);
    }
    // Maintain
    if (response && Actions.currentScene !== LoginScene &&  MaintainStautusCode  == response.status) {
      return Actions.reset(LoginScene);
    }

    if (response && Actions.currentScene !== LoginScene &&  Off_Server  == response.status) {
      return Alert.alert('Thông báo','Hệ thống đang bảo trì anh/chị vui lòng quay lại sau.')
    }
    return Promise.reject(error);
  }
}