import { Router } from 'express';
import propertiesRouter from '@modules/property/infra/http/routes/properties.routes';


const routes = Router();

routes.use('/properties', propertiesRouter);

export default routes;
