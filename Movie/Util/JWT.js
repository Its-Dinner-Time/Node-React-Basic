import jwt from 'jsonwebtoken';

const TOKEN_KEY = 'itsSecret';

export default class JWT {
  static get instance() {
    return jwt;
  }

  static get key() {
    return TOKEN_KEY;
  }

  constructor() {}

  static sign(target) {
    return jwt.sign(target, TOKEN_KEY);
  }

  static verify(target, callback) {
    return jwt.verify(target, TOKEN_KEY, callback);
  }
}
