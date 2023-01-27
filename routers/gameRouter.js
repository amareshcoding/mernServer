import { Router } from 'express';
import {
  registerGameUser,
  updateScore,
  generateRandomWord,
} from '../controller/gameController.js';

const gameRouter = Router();

gameRouter.post('/', registerGameUser);
gameRouter.patch('/', updateScore);
gameRouter.get('/rand', generateRandomWord);

export default gameRouter;
