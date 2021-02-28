export default interface IMeterPriceRepository {
  getMeterPrice(): Promise<number>;
}
