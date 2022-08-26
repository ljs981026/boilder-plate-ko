const express = require('express');
const app = express();
const port = 5050;
// 몽구스 모듈 가져오기
const mongoose = require('mongoose');
// 몽구스 모듈을 이용하여 몽고db 연결
mongoose.connect('mongodb+srv://osarra:981026@boilerplate.atyeaxf.mongodb.net/?retryWrites=true&w=majority', {
  // 에러 방지
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
}).then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!~~안녕하세요~'));
app.listen(port, () => console.log(`http://localhost:${port}`));