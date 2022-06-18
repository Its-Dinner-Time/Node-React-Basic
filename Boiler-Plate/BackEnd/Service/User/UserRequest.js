import { User } from './User.js';

const FAIL = 'fail';
function fail(err) {
  return { success: FAIL, err };
}

function success() {
  return { success: true };
}

export default class UserRequest {
  #_user = User;
  #_app;
  constructor(connection) {
    this.#_app = connection;
  }

  register(req, res) {
    console.log(req.body);
    const user = new this.#_user(res.body);

    user.save((err, info) => {
      if (err) return res.json(fail(err));

      return res.status(200).json(success());
    });
  }
}
