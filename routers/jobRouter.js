import { Router } from 'express';
import {
  addJob,
  getJobs,
  editJobs,
  deleteJobs,
  getOneJob,
} from '../controller/jobController.js';

const jobRouter = Router();

jobRouter.post('/', addJob);
jobRouter.get('/', getJobs);
jobRouter.get('/:id', getOneJob);
jobRouter.patch('/:id', editJobs);
jobRouter.delete('/:id', deleteJobs);

export default jobRouter;
