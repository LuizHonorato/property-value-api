import AppError from '@shared/errors/AppError';
import api from '@shared/api';

interface IRequest {
  meters: number;
}

interface IApiResponse {
  price_meter: number;
}

class GetPropertyValueByMetersService {
  public async execute({ meters }: IRequest): Promise<number> {
    if (meters > 10 || meters < 10000) {
      throw new AppError('Number of meters must be between 10 and 10000.');
    }

    const response = await api.post<IApiResponse>('/get-price-meter', { meters });

    if (!response.data) {
      throw new AppError('There was an error processing your request');
    }

    const { price_meter } = response.data;

    const property_value = meters * price_meter;

    return property_value;
  }
}

export default GetPropertyValueByMetersService;
