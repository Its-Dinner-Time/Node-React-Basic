import mongoose from 'mongoose';
import Bcrypt from '../../../Util/Bcrypt.js';
import JWT from '../../../Util/JWT.js';

const bcrypt = new Bcrypt(10); // 암호화

// schema 정의
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

userSchema.methods.comparePassword = function (reqPassword, callback) {
  const { instance } = bcrypt;
  instance.compare(reqPassword, this.password, (err, info) => {
    if (err) {
      callback(err);
      return;
    }

    callback(null, info);
  });
};

userSchema.methods.generateToken = function (callback) {
  const user = this;

  user.token = JWT.sign(user._id.toHexString());
  user.save((err, info) => {
    if (err) return callback(err);
    return callback(null, info);
  });
};

userSchema.methods.getInfo = function () {
  const { _id, userId, name, lastname, age, role, image } = this;
  return {
    _id,
    userId,
    name,
    lastname,
    age,
    role,
    image,
  };
};

userSchema.statics.findByToken = function ({ token, decoded }, callback) {
  const user = this;
  user.findOne({ _id: decoded, token }, (err, info) => {
    if (!info) return callback(err);
    return callback(null, info);
  });
};

userSchema.pre('save', function (next) {
  const user = this;
  // 비밀번호 암호화
  if (user.isModified('password')) {
    bcrypt.encoder(user.password, next, (hash) => {
      user.password = hash;
      next();
    });

    return;
  }

  next();
});

const User = mongoose.model('User', userSchema);
export { User };
