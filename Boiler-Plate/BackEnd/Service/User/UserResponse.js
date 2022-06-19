import { fail, success } from '../../../Util/Utils.js';
import { User } from './User.js';

export default class UserResponse {
  #_user = User;
  #_app;

  #_loginError = { loginSuccess: false };
  #_loginSuccess = { loginSuccess: true };
  #_noUserError() {
    const message = 'no user';
    return { ...this.#_loginError, message };
  }
  #_passwordNotMatchError() {
    const message = 'password not matched';
    return { ...this.#_loginError, message };
  }
  #_errorResolve(res, err, info, resJson) {
    if (err) {
      return res.json(fail(err));
    }

    if (!info) {
      return res.json(resJson);
    }

    return true;
  }

  constructor(connection) {
    this.#_app = connection;
  }

  login(req, res) {
    const { userId, password } = req.body;
    const user = this.#_user;

    user.findOne({ userId }, (err, info) => {
      if (this.#_errorResolve(res, err, info, this.#_noUserError()) !== true) return;

      info.comparePassword(password, (err, info) => {
        if (this.#_errorResolve(res, err, info, this.#_passwordNotMatchError()) !== true) return;

        res.json(this.#_loginSuccess);
      });
    });
  }
}
