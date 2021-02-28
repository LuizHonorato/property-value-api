import { container } from 'tsyringe';
import { Request, Response } from 'express';
import GetMeterPriceService from '@modules/property/services/GetMeterPriceService';

class MeterPriceController {
  async index(request: Request, response: Response): Promise<Response> {
    const getMeterPriceService = container.resolve(GetMeterPriceService);

    const price_meter = await getMeterPriceService.execute();

    return response.json({ price_meter });
  }
}

export default MeterPriceController;
