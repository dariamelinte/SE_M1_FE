import { fireEvent, render, screen } from '@testing-library/react';

import { ForgotPassword } from './ForgotPassword';

describe('ForgotPassword', () => {
  it('should gather the data correctly', async () => {
    render(<ForgotPassword />);

    const emailInput = screen.getByPlaceholderText('Email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
  });

  it('should show an error message when an invalid email is typed', async () => {
    render(<ForgotPassword />);

    const emailInput = screen.getByPlaceholderText('Email');
    fireEvent.change(emailInput, { target: { value: 'invalid email' } });
    setTimeout(() => {
      expect(screen.getByText('Email invalid')).toBeInTheDocument();
    }, 100);
  });
});
