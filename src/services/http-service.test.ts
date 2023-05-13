import httpService from './http-service';

describe('httpService', () => {
  it('should be able to make a successful request', async () => {
    const response = await httpService.get('/doctors');

    jest.setTimeout(5000);
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });
});
