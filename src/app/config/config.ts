const API_PATH = 'api';

export const SERVICES_URLS = {
  devicesUrl: `${API_PATH}/devices`,
  userInfoUrl: `${API_PATH}/user`,
  loginUrl: 'login'
};

export const USER_AUTHENTICATION = {
  user: 'user'
};

export const USER_ROLES = {
  admin: 'ROLE_ADMIN',
  user: 'ROLE_USER'
};

export function getFullPath(path: string) {
  return `http://localhost:8080/${path}`;
}
