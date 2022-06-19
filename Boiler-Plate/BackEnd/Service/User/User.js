import mongoose from 'mongoose';
import Bcrypt from '../../../Util/Bcrypt.js';

const userSchema = mongoose.Schema({
  userId: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },

  name: {
    type: String,
    maxlength: 50,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  age: {
    type: Number,
    default: 0,
  },

  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre('save', function (next) {
  const user = this;
  // 비밀번호 암호화
  if (user.isModified('password')) {
    const bcrypt = new Bcrypt(10);
    bcrypt.encoder(user.password, next, (hash) => {
      user.password = hash;
      next();
    });
  }
});

const User = mongoose.model('User', userSchema);
export { User };
