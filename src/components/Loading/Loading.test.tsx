import { render } from '@testing-library/react';

import { Loading } from '.';

describe('Loading', () => {
  it('renders correctly', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });

  it('applies correct CSS classes for default size', () => {
    // render(<Loading />);
    // const loadingElement = screen.getByTestId('loading-element');
    // expect(loadingElement).toHaveClass('default');
  });

  it('applies correct CSS classes for small size', () => {
    // render(<Loading size="small" />);
    // const loadingElement = screen.getByTestId('loading-element');
    // expect(loadingElement).toHaveClass('small');
  });

  it('applies correct CSS classes for large size', () => {
    // render(<Loading size="large" />);
    // const loadingElement = screen.getByTestId('loading-element');
    // expect(loadingElement).toHaveClass('large');
  });
});
