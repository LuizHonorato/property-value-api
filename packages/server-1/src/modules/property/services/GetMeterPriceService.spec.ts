import FakeMeterPriceRepository from "../repositories/fakes/FakeMeterPriceRepository";
import GetMeterPriceService from "./GetMeterPriceService";

let fakeMeterPriceRepository: FakeMeterPriceRepository;
let getMeterPriceService: GetMeterPriceService;

describe('Get Meter Price', () => {
  beforeEach(() => {
    fakeMeterPriceRepository = new FakeMeterPriceRepository();

    getMeterPriceService = new GetMeterPriceService(fakeMeterPriceRepository);
  });
  it('should be able to return the price meter', async () => {
    const price_meter = await getMeterPriceService.execute();

    expect(price_meter).toEqual(2500);
  });
});
