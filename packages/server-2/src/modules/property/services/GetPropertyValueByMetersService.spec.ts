import MockAdapter from 'axios-mock-adapter';

import api from '@shared/api';

const apiMock = new MockAdapter(api);

describe('GetPropertyValueByMeters', () => {
  it('should be able to get price meter', async () => {
    const apiResponse = {
      price_meter: 2500
    };

    expect(apiMock.onGet('get-meter-price', {}, expect.objectContaining(apiResponse)));
  });

  it('should be able to calc property value', async () => {
    const meters = 120;

    const apiResponse = {
      price_meter: 2500
    };

    apiMock.onGet('get-meter-price').reply(200, apiResponse);

    const property_value = meters * apiResponse.price_meter;

    expect(apiMock.onGet('get-meter-price', {}, expect.objectContaining(apiResponse)));
    expect(property_value).toEqual(300000);
  })
});
