import { User } from './User.js';

export default class UserResponse {
  #_user = User;
  #_app;
  constructor(connection) {
    this.#_app = connection;
  }
}
