const API_PATH = 'api';

export const SERVICES_URLS = {
  devicesUrl: `${API_PATH}/devices`,
  basicAuthUrl: 'basicauth',
  loginUrl: 'login'
};

export const USER_AUTHENTICATION = {
  user: 'user',
  token: 'token'
};

export const USER_ROLES = {
  admin: 'ROLE_ADMIN',
  user: 'ROLE_USER'
};

export function getFullPath(path: string) {
  return `http://localhost:8080/${path}`;
}
