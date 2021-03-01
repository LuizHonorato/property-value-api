import IMeterPriceRepository from "@modules/property/repositories/IMeterRepository";
import MeterPrice from "@modules/property/infra/data/entities/MeterPrice";

class FakeMeterPriceRepository implements IMeterPriceRepository {
  private meterPrice: MeterPrice = {
    price: 2500
  }

  public async getMeterPrice(): Promise<number> {
    const price = this.meterPrice.price;

    return price;
  }

}

export default FakeMeterPriceRepository;
