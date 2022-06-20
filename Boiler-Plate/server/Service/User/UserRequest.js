import { User } from './User.js';
import { fail, success } from '../../../Util/Utils.js';

export default class UserRequest {
  #_user = User;
  #_app;
  constructor(connection) {
    this.#_app = connection;
  }

  register(req, res) {
    const user = new this.#_user(req.body);

    user.save((err, info) => {
      if (err) return res.json(fail(err));

      return res.status(200).json(success());
    });
  }
}
