import { render, screen } from '@testing-library/react';
import React from 'react';

import MyAccountPage from './my-account.page';

describe('MyAccountPage', () => {
  it('renders the MyAccount page', () => {
    render(<MyAccountPage />);
    expect(
      screen.getByRole('container', { name: 'my-account-page' })
    ).toBeInTheDocument();
  });
});
