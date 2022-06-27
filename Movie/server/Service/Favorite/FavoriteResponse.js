import { Favorite } from './Favorite.js';

export default class FavoriteResponse {
  #_app;

  constructor(app) {
    this.#_app = app;
  }

  getCount(req, res) {
    console.log('getCount');
    Favorite.find({ movieId: req.query.movieId }).exec((err, info) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, count: info.length });
    });
  }

  isLiked(req, res) {
    console.log('isLiked');
    Favorite.find({ movieId: req.query.movieId, userFrom: req.query.userFrom }).exec((err, info) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, isLiked: info.length !== 0 });
    });
  }
}
