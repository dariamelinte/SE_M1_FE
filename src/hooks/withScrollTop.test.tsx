import { render } from '@testing-library/react';

import { withScrollTop } from './withScrollTop';

describe('withScrollTop', () => {
  it('scrolls to the top of the page on mount', () => {
    // Mock the window.scrollTo method
    const scrollToMock = jest.fn();
    Object.defineProperty(global.window, 'scrollTo', {
      value: scrollToMock,
      writable: true,
    });

    // Create a dummy component
    const DummyComponent = () => <div>Dummy Component</div>;
    const WrappedComponent = withScrollTop(DummyComponent);

    // Render the component
    render(<WrappedComponent />);

    // Expect that window.scrollTo has been called with the correct arguments
    expect(scrollToMock).toHaveBeenCalledWith(0, 0);
  });
});
