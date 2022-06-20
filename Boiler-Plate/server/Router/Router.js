import UserRouter from '../Service/User/UserRouter.js';

export default function router(app) {
  // Home
  app.get('/api', (req, res) => {
    res.json('Hello Node');
  });

  // user router
  UserRouter('/api', app);
}
