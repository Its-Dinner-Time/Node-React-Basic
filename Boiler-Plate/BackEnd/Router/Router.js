import UserRouter from '../Service/User/UserRouter.js';

export default function router(app) {
  // Home
  app.get('/', (req, res) => {
    res.send('Hello Node');
  });

  // user router
  UserRouter(app);
}
