const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    // 공백 제거
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  // 유효성 관리
  token: {
    type: String 
  },
  // 토큰 사용 기간
  tokenExp: {
    type: Number
  }
});

const User = mongoose.model('User', userSchema);
module.exports = { User }