import { render, screen } from '@testing-library/react';

import RegisterInformationPage from './register-information.page';

describe('RegisterInformationPage', () => {
  it('renders the RegisterInformation page', () => {
    render(<RegisterInformationPage />);
    expect(
      screen.getByRole('container', { name: 'register-information-page' })
    ).toBeInTheDocument();
  });
});
