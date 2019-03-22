import { LocalStorage } from '@data';

const AccessTokenManager = { accessToken: null };
const ACCESS_TOKEN = 'AccessToken';

AccessTokenManager.initialize = () => {
  return LocalStorage.get(ACCESS_TOKEN, (error, result) => {
    AccessTokenManager.accessToken = result;
  });
};

AccessTokenManager.saveAccessToken = (token) => {
  AccessTokenManager.accessToken = token;
  LocalStorage.set(ACCESS_TOKEN, token);
};

AccessTokenManager.clear = () => {
  AccessTokenManager.accessToken = null;
  LocalStorage.remove(ACCESS_TOKEN);
};

AccessTokenManager.getAccessToken = () => {
  return AccessTokenManager.accessToken;
};

export default AccessTokenManager;