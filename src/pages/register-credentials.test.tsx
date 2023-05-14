import { render, screen } from '@testing-library/react';

import RegisterCredentialsPage from './register-credentials.page';

describe('RegisterCredentialsPage', () => {
  it('renders the RegisterCredentials page', () => {
    render(<RegisterCredentialsPage />);
    expect(
      screen.getByRole('container', { name: 'register-credentials-page' })
    ).toBeInTheDocument();
  });
});
