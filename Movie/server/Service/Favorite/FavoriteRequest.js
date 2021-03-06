import { fail, success } from '../../../Util/Utils.js';
import { Favorite } from './Favorite.js';

export default class FavoriteRequest {
  #_app;

  constructor(app) {
    this.#_app = app;
  }

  like(req, res) {
    const favorite = new Favorite(req.body);

    favorite.save((err, info) => {
      if (err) return res.json(fail(err));
      return res.status(200).json(success());
    });
  }

  unlike(req, res) {
    Favorite.deleteOne({ movieId: req.query.movieId, userFrom: req.query.userFrom })
      .then((info) => {
        res.status(200).json({ success: true, info });
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
}
