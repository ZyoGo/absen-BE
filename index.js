import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const port = 3000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
