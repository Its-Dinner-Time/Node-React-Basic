import Express from 'express';
import Connection from './Connection/MongoDB.js';
import router from './Router/Router.js';

const PORT = 3000;
const app = Express();

export default async function App() {
  // server run
  app.listen(PORT, () => console.log(`Listening port: ${PORT}`));

  app.use(Express.urlencoded({ extended: true }));
  app.use(Express.json());
  // routing
  router(app);
}
