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

    user.findOne({ userId }, (err, loginUser) => {
      if (this.#_errorResolve(res, err, loginUser, this.#_noUserError()) !== true) return;

      loginUser.comparePassword(password, (err, info) => {
        if (this.#_errorResolve(res, err, info, this.#_passwordNotMatchError()) !== true) return;

        loginUser.generateToken((err, info) => {
          if (err) return res.status(400).send(err);

          // token 저장
          const { token, _id } = info;
          res
            .cookie('basic_auth', token)
            .status(200)
            .json({ ...this.#_loginSuccess, id: _id });
        });
      });
    });
  }

  auth(req, res) {
    const { user } = req;
    if (!user) return res.json({ isAuth: false, err: 'no user' });

    res.status(200).json({
      ...user.getInfo(),
      isAdmin: user.role !== 0,
      isAuth: true,
    });
  }

  logout(req, res) {
    const user = this.#_user;

    user.findByIdAndUpdate(
      { _id: req.user?._id }, //
      { token: '' },
      (err, info) => {
        if (err) return res.status(400).json(err);
        return res.status(200).json(success());
      }
    );
  }
}
