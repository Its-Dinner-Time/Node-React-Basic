import UserRequest from './UserRequest.js';
import UserResponse from './UserResponse.js';

import Auth from '../../Middleware/auth.js';

export default function (root, app) {
  const USER = `${root}/user`;
  const USER_LOGIN = `${USER}/login`;
  const USER_AUTH = `${USER}/auth`;
  const USER_LOGOUT = `${USER}/logout`;

  const request = new UserRequest(app);
  const response = new UserResponse(app);

  // User Register
  app.post(USER, (req, res) => {
    request.register(req, res);
  });

  // User login
  app.post(USER_LOGIN, (req, res) => {
    response.login(req, res);
  });

  // User Auth
  app.get(USER_AUTH, Auth, (req, res) => {
    response.auth(req, res);
  });

  // User Logout
  app.get(USER_LOGOUT, Auth, (req, res) => {
    response.logout(req, res);
  });
}
