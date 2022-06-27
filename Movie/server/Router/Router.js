import UserRouter from '../Service/User/UserRouter.js';
import FavoriteRouter from '../Service/Favorite/FavoriteRouter.js';

const ROOT = '/api';
export default function router(app) {
  // Home
  app.get(ROOT, (req, res) => {
    res.json('Hello Node');
  });

  // user router
  UserRouter(ROOT, app);

  // favorite router
  FavoriteRouter(ROOT, app);
}
