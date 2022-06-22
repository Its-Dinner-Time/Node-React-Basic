import bcrypt from 'bcrypt';

export default class BCryptPasswordEncoder {
  #_saltRounds;

  get instance() {
    return bcrypt;
  }

  constructor(rounds) {
    this.#_saltRounds = rounds;
  }

  encoder(target, error, callback) {
    bcrypt.genSalt(this.#_saltRounds, function (err, salt) {
      if (err) {
        error(err);
        return;
      }

      bcrypt.hash(target, salt, function (err, hash) {
        if (err) {
          error(err);
          return;
        }

        callback(hash);
      });
    });
  }
}
