import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/routes';
import 'reflect-metadata';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log('🏃 Started server with success.');
});

export default app;
