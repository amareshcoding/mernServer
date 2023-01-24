import { Router } from 'express';
import {
  addJob,
  getJobs,
  editJobs,
  deleteJobs,
} from '../controller/jobController.js';

const jobRouter = Router();

jobRouter.post('/', addJob);
jobRouter.get('/', getJobs);
jobRouter.patch('/:id', editJobs);
jobRouter.delete('/:id', deleteJobs);

export default jobRouter;

