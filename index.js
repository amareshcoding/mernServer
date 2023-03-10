import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { mongoConnect } from './config/connect.js';
import userRouter from './routers/userRouter.js';
import bugRouter from './routers/bugRouter.js';
import calculateRoute from './routers/calculateRoute.js';
import jobRouter from './routers/jobRouter.js';
import gameRouter from './routers/gameRouter.js';

// config
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());
dotenv.config();

//routers
app.get('/', (req, res) => {
  res.send('Server working fine!');
});
app.use('/api/user', userRouter);
app.use('/api/bug', bugRouter);
app.use('/api/calculate', calculateRoute);
app.use('/api/job', jobRouter);
app.use('/api/game', gameRouter);

//server
const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  try {
    await mongoConnect();
    console.log(`listening server at port ${PORT}`);
  } catch (err) {
    console.log('err: ', err);
  }
});





//
// Changes done in test branch
//Change 2
//change in master