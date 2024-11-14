const express = require('express');
const cors = require('cors');
const app = express();

app.use(
  cors({
    origin: 'http://127.0.0.1:5501',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use(express.text()); // text 형식의 body 파싱
app.use(express.json()); // JSON 형식의 body 파싱

let data = { message: '여러분 화이팅!' };

app.get('/', (req, res) => {
  res.json(data);
});

app.put('/', (req, res) => {
  data.message = req.body;
  res.send(`업데이트된 데이터: ${req.body}`);
});

app.delete('/', (req, res) => {
  data = {};
  res.send('데이터가 삭제되었습니다.');
});

app.listen(3000, () => {
  console.log('서버가 http://localhost:3000/ 에서 실행 중입니다.');
});
