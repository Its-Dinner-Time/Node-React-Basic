import JWT from '../../Util/JWT.js';
import { User } from '../Service/User/User.js';

export default function auth(req, res, next) {
  // 클라이언트 쿠키에서 jwt 값 조회(데이터)
  let decoded;
  const token = req.cookies.basic_auth; // => UserResponse.js
  if (!token) {
    next();
    return;
  }

  // token 복호화(계산)
  JWT.verify(token, (err, info) => {
    if (err) {
      next();
      return;
    }

    decoded = info;
  });

  if (!decoded) {
    next();
    return;
  }

  // token으로 유저 조회(액션)
  User.findByToken(decoded, (err, info) => {
    req.token = decoded;
    req.user = info;
    next();
  });
}
