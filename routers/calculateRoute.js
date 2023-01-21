import { Router } from 'express';
import { calculateInvestment } from '../controller/calculateController.js';

const calculateRoute = Router();

calculateRoute.post('/', calculateInvestment);

export default calculateRoute;
