import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the text "Footer"', () => {
    render(<Footer />);
    const footerElement = screen.getByText('Footer');
    expect(footerElement).toBeInTheDocument();
  });
});
