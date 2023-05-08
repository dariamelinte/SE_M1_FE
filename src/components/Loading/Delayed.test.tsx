import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import Delayed from './Delayed';

describe('Delayed', () => {
  it('renders children after delay', async () => {
    render(
      <Delayed waitBeforeShow={1000}>
        <div data-testid="test-child">Child</div>
      </Delayed>
    );

    expect(screen.queryByTestId('test-child')).not.toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId('test-child')).toBeInTheDocument();
    });
  });

  it('renders children immediately if no delay is provided', async () => {
    render(
      <Delayed>
        <div data-testid="test-child">Child</div>
      </Delayed>
    );

    expect(screen.getByTestId('test-child')).toBeInTheDocument();
  });
});
