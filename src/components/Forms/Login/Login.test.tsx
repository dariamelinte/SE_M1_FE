import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import { Login } from './Login';

describe('Login', () => {
  test('renders email and password inputs', () => {
    render(<Login />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('calls login API with email and password when form is submitted', async () => {
    const mockLogin = jest.fn().mockResolvedValueOnce({
      data: { success: true, message: 'Login successful' },
    });
    const mockSetCredential = jest.fn();
    const mockPush = jest.fn();
    jest
      .spyOn(require('next/router'), 'useRouter')
      .mockReturnValue({ push: mockPush });
    jest
      .spyOn(require('@/stores/credential'), 'default')
      .mockReturnValue({ setCredential: mockSetCredential });
    jest
      .spyOn(require('@/services/api/login'), 'login')
      .mockImplementation(mockLogin);
    render(<Login />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    userEvent.type(emailInput, 'test@example.com');
    userEvent.type(passwordInput, 'password');
    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));
    await act(async () => {
      await Promise.resolve();
    });
    expect(mockLogin).toHaveBeenCalledTimes(1);
    expect(mockLogin).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password',
    });
    expect(mockSetCredential).toHaveBeenCalledTimes(1);
    expect(mockSetCredential).toHaveBeenCalledWith({
      credential: { role: 'ADMIN' },
    });
    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith('/admin');
    expect(screen.getByText('Login successful')).toBeInTheDocument();
  });

  test('displays error message when login API returns an error', async () => {
    const mockLogin = jest.fn().mockRejectedValueOnce({
      response: { data: { success: false, message: 'Invalid credentials' } },
    });
    jest
      .spyOn(require('@/services/api/login'), 'login')
      .mockImplementation(mockLogin);
    render(<Login />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    userEvent.type(emailInput, 'test@example.com');
    userEvent.type(passwordInput, 'password');
    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));
    await act(async () => {
      await Promise.resolve();
    });
    expect(mockLogin).toHaveBeenCalledTimes(1);
    expect(mockLogin).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password',
    });
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
  });
});
