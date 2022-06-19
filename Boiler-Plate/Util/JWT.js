import jwt from 'jsonwebtoken';

const TOKEN_KEY = 'itsSecret';

export default class JWT {
  get instance() {
    return jwt;
  }

  constructor() {}

  sign(target) {
    return jwt.sign(target, TOKEN_KEY);
  }
}
