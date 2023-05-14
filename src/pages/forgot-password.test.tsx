import { render, screen } from '@testing-library/react';
import React from 'react';

import ForgotPasswordPage from './forgot-password.page';

describe('ForgotPasswordPage', () => {
  it('renders the Forgot Password page', () => {
    render(<ForgotPasswordPage />);
    expect(
      screen.getByRole('container', { name: 'forgot-password-page' })
    ).toBeInTheDocument();
  });

  it('displays the logo', () => {
    render(<ForgotPasswordPage />);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});
