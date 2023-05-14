import { render, screen } from '@testing-library/react';
import React from 'react';

import LoginPage from './login.page';

describe('LoginPage', () => {
  it('renders the Login page', () => {
    render(<LoginPage />);
    expect(
      screen.getByRole('container', { name: 'login-page' })
    ).toBeInTheDocument();
  });

  it('displays the logo', () => {
    render(<LoginPage />);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});
