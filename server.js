import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const pool = mysql.createPool({
  host: process.env.VITE_DB_HOST || process.env.VITE_DEFAULT_DB_HOST,
  user: process.env.VITE_DB_USER || process.env.VITE_DEFAULT_DB_USER,
  password: process.env.VITE_DB_PASSWORD || process.env.VITE_DEFAULT_DB_PASSWORD,
  database: process.env.VITE_DB_DATABASE || process.env.VITE_DEFAULT_DB_DATABASE,
});
console.log('MySQL User:', process.env.VITE_DEFAULT_DB_USER);
console.log('MySQL Password:', process.env.VITE_DEFAULT_DB_PASSWORD);
app.post('/addMessage', (req, res) => {
  const { nickname, date, textarea } = req.body;
  pool.query('INSERT INTO messages SET ?', { nickname, date, textarea }, (err, results) => {
    if (err) {
      console.error('数据库操作失败:', err);
      res.status(500).send({ error: '服务器错误', details: err.message });
      return;
    }
    res.status(200).send({ message: '成功添加消息', insertedId: results.insertId });
  });
});

app.get('/getMessages', (req, res) => {
  pool.query('SELECT * FROM messages', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('服务器错误');
      return;
    }
    res.status(200).send(JSON.stringify(rows))
  });
});

app.listen(3000, () => {
  console.log('服务器正在监听端口3000');
});