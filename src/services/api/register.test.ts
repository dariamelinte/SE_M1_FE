import { register } from './register';

describe('authService', () => {
  it('should be able to register as patient', async () => {
    // Create a user with valid credentials
    const user = {
      email: 'test-patient3@medconnect.com',
      phoneNumber: '0749639919',
      firstName: 'Test',
      lastName: 'Test',
      password: 'Test123',
      role: 'PATIENT',
    };

    const response = await register(user);
    jest.setTimeout(10000);

    // Verify that the register was successful
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.success).toBe(true);
    expect(response.data.user).toBeDefined();
  });

  it('should be able to register as doctor', async () => {
    // Create a user with valid credentials
    const user = {
      email: 'test-medic3@medconnect.com',
      phoneNumber: '0749639919',
      firstName: 'Test',
      lastName: 'Test',
      password: 'Test123',
      role: 'DOCTOR',
    };

    const response = await register(user);
    jest.setTimeout(10000);

    // Verify that the register was successful
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.success).toBe(true);
    expect(response.data.user).toBeDefined();
  });

  it('should not be able to register an user with already existing email', async () => {
    // Create a user with valid credentials
    const user = {
      email: 'test-patient3@medconnect.com',
      phoneNumber: '0749639919',
      firstName: 'Test',
      lastName: 'Test',
      password: 'Test123',
      role: 'PATIENT',
    };

    const response = await register(user);
    jest.setTimeout(10000);

    // Verify that the register was successful
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.success).toBe(false);
  });
});
