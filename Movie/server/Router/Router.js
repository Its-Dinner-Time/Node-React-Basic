import UserRouter from '../Service/User/UserRouter.js';

const ROOT = '/api';
export default function router(app) {
  // Home
  app.get(ROOT, (req, res) => {
    res.json('Hello Node');
  });

  // user router
  UserRouter(ROOT, app);
}
