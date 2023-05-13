import { confirmDoctor, getDoctors } from './doctors';

describe('adminService', () => {
  it('should be able to fetch a list of doctors', async () => {
    const response = await getDoctors();
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.data).toBeInstanceOf(Array);
  });

  it('should be able to confirm a doctor', async () => {
    const confirmResponse = await confirmDoctor({
      id: '641dd5e52f7948d4906b54e8',
      isAccepted: true,
    });
    expect(confirmResponse.status).toBe(200);
  });
});
