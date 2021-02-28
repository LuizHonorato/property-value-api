import { Request, Response } from 'express';
import GetPropertyValueByMetersService from '@modules/property/services/GetPropertyValueByMetersService';

class PropertyValueController {
  async index(request: Request, response: Response): Promise<Response> {
    const { meters } = request.body;

    const getProperyValueByMetersService = new GetPropertyValueByMetersService();

    const property_value = await getProperyValueByMetersService.execute({ meters });

    return response.json({ property_value });
  }
}

export default PropertyValueController;
