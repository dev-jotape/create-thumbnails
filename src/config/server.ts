import * as express from 'express';

const app = express();

app.use(express.json());

app.set('port', (process.env.PORT || 4000));

process.on('unhandledRejection', (reason) => {
  throw reason;
});
process.on('uncaughtException', (error) => {
  console.error(`uncaughtException: ${error}`);
});

export default app;
