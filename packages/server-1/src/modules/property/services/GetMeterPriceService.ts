import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IMeterPriceRepository from '../repositories/IMeterRepository';

@injectable()
class GetMeterPriceService {
  constructor(
    @inject('MeterPriceRepository')
    private meterPriceRepository: IMeterPriceRepository,
  ) {}

  public async execute(): Promise<number> {
    const price_meter = await this.meterPriceRepository.getMeterPrice();

    if (!price_meter) {
      throw new AppError('No value found');
    }

    return price_meter;
  }
}

export default GetMeterPriceService;
