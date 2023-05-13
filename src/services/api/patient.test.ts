import { getPatients } from './patients';

describe('adminService', () => {
  it('should be able to fetch a list of doctors', async () => {
    const response = await getPatients();
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.data).toBeInstanceOf(Array);
  });
});
