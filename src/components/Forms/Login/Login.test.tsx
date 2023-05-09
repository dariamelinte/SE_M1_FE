import { fireEvent, render, screen } from '@testing-library/react';

import { Login } from './Login';

describe('Login', () => {
  test('renders email and password inputs', () => {
    render(<Login />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('complete email and password', async () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText('Email');
    fireEvent.change(emailInput, {
      target: { value: 'test@example.com' },
    });
    expect(emailInput).toHaveValue('test@example.com');

    const passwordInput = screen.getByPlaceholderText('Password');
    fireEvent.change(passwordInput, {
      target: { value: 'password' },
    });
    expect(passwordInput).toHaveValue('password');

    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));
  });
});
