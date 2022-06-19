import UserRequest from './UserRequest.js';
import UserResponse from './UserResponse.js';

const USER = '/user';
const USER_ALL = `${USER}/all`;
const USER_LOGIN = '/login';

export default function router(app) {
  const request = new UserRequest(app);
  const response = new UserResponse(app);
  // User 한 명 조회
  app.get(USER, (req, res) => {
    res.send('user');
  });

  // User 전체 조회
  app.get(USER_ALL, (req, res) => {
    res.send('user');
  });

  // User Register
  app.post(USER, (req, res) => {
    request.register(req, res);
  });

  // User login
  app.post(USER_LOGIN, (req, res) => {
    response.login(req, res);
  });
}
