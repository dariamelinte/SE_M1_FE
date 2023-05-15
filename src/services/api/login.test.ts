import { login } from './login';

describe('authService', () => {
  it('should be able to log in with valid credentials', async () => {
    // Create a user with valid credentials
    const user = { email: 'admin@medconnect.com', password: 'Admin123' };

    // Try to log in with the user's credentials
    const response = await login(user);

    // Verify that the login was successful
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.success).toBe(true);
    expect(response.data.user).toBeDefined();
  });

  it('should not be able to log in with invalid credentials', async () => {
    // Create a user with invalid credentials
    const user = { email: 'test@example.com', password: 'invalid' };

    // Try to log in with the user's credentials
    const response = await login(user);

    // Verify that the login failed
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.success).toBe(false);
    expect(response.data.message).toBe('Email or password incorrect.');
  });
});
