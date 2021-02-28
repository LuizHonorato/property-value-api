import { Router } from 'express';
import MeterPriceController from '../controllers/MeterPriceController';

const propertiesRouter = Router();
const meterPriceController = new MeterPriceController();

propertiesRouter.get('/get-price-meter', meterPriceController.index);

export default propertiesRouter;
