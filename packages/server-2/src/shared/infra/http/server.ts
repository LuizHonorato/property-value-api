import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/test2', (req, res) => res.send({ ok: true }));

app.listen(3002, () => {
  console.log('Server 2 started on port 3002! 🚀️');
});
