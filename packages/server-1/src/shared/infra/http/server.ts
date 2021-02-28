import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => res.send({ ok: true }));

app.listen(3001, () => {
  console.log('Server 1 started on port 3001! 🚀️');
});
