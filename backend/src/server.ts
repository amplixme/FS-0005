import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const DEFAULT_PORT = 3000;
const port = Number(process.env.PORT) || DEFAULT_PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
