import { render, screen } from '@testing-library/react';

import Index from './index.page';

describe('Index', () => {
  it('renders a logo image', () => {
    render(<Index />);
    const image = screen.getByAltText('logo');
    expect(image).toBeInTheDocument();
  });

  it('renders a "Log In" button', () => {
    render(<Index />);
    const loginButton = screen.getByRole('button', { name: 'Log In' });

    expect(loginButton).toBeInTheDocument();
  });

  it('renders a "Register" button', () => {
    render(<Index />);
    const registerButton = screen.getByRole('button', { name: 'Register' });

    expect(registerButton).toBeInTheDocument();
  });

  it('renders a "Page" component with aria-label "home-page"', () => {
    render(<Index />);
    const page = screen.getByRole('container', { name: 'home-page' });
    expect(page).toBeInTheDocument();
  });
});
