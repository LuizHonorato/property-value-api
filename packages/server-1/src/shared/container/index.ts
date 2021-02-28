import { container } from 'tsyringe';
import MeterPriceRepository from '@modules/property/infra/data/repositories/MeterPriceRepository';
import IMeterPriceRepository from '@modules/property/repositories/IMeterRepository';

container.registerSingleton<IMeterPriceRepository>(
  'MeterPriceRepository',
  MeterPriceRepository
);
