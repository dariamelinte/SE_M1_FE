import { confirmDoctor, getDoctors } from './doctors';
import { register } from './register';

describe('adminService', () => {
  it('should be able to fetch a list of doctors', async () => {
    const response = await getDoctors();
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.data).toBeInstanceOf(Array);
  });

  it('should be able to confirm a doctor', async () => {
    // Create a user with valid credentials
    const user = {
      email: 'test-medic100@medconnect.com',
      phoneNumber: '0749639919',
      firstName: 'Test',
      lastName: 'Test',
      password: 'Test123',
      role: 'DOCTOR',
    };

    const response = await register(user);
    jest.setTimeout(10000);

    const confirmResponse = await confirmDoctor({
      id: response.data.user.id,
      isAccepted: true,
    });
    expect(confirmResponse.status).toBe(200);
  });
});
