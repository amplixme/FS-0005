import cors from 'cors';
import express from 'express';
import healthRoutes from './routes/health.routes';
import { errorHandler } from './middlewares/error.middleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use(healthRoutes);

app.use(errorHandler);

export default app;
