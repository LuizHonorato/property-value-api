import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';

import AppError from '@shared/errors/AppError';
import routes from './routes';

import '@shared/container';

const app = express();

const origin = process.env.NODE_ENV === 'development' ? 'http://localhost:3002' : 'http://167.172.143.12:3002';

const corsOptions = {
  origin,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: err.stack,
  });
});

app.listen(3001, () => {
  console.log('Server 1 started on port 3001! 🚀️');
});
