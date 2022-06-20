import mongoose from 'mongoose';
import config from '../config/key.js';

export default config().then((env) => {
  mongoose
    .connect(env.mongoURI, {
      useNewUrlParser: true,
      autoIndex: true,
    })
    .then(() => console.log('Connected'))
    .catch((err) => console.log(err));
});
