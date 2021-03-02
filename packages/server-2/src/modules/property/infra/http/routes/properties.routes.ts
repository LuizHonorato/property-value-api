import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import PropertyValueController from '../controllers/PropertyValueController';

const propertiesRouter = Router();
const propertyValueController = new PropertyValueController();

propertiesRouter.post('/get-property-value', celebrate({
  [Segments.BODY]: {
    meters: Joi.number().required(),
  },
}), propertyValueController.index);

export default propertiesRouter;
