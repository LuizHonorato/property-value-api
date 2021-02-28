import 'reflect-metadata';
import { container } from 'tsyringe';

container.register('MeterPriceRepository', {
  useValue: {
    log: jest.fn(),
  },
});
