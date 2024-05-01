import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import route from './route.js';
import errorHandler from './src/config/error-handler.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(morgan('combined'));
app.use(cors())

app.use(express.json());
app.use(cors());
app.use("/v1", route);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`SMS listening on port ${port}`);
});