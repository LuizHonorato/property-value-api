import IMeterPriceRepository from "@modules/property/repositories/IMeterRepository";
import MeterPrice from "../entities/MeterPrice";

class MeterPriceRepository implements IMeterPriceRepository {
  private meterPrice: MeterPrice = {
    price: 2500
  }

  public async getMeterPrice(): Promise<number> {
    const price = this.meterPrice.price;

    return price;
  }

}

export default MeterPriceRepository;
