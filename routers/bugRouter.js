import { Router } from 'express';
import {
  addBug,
  deleteBugs,
  editBug,
  getBugs,
} from '../controller/bugController.js';

const bugRouter = Router();

bugRouter.post('/', addBug);
bugRouter.get('/', getBugs);
bugRouter.patch('/:id', editBug);
bugRouter.delete('/:id', deleteBugs);

export default bugRouter;
