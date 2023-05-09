import { render, screen } from '@testing-library/react';
import React from 'react';

import Page from '.';

describe('Page component', () => {
  test('renders without crashing', () => {
    render(<Page />);
    const mainContainer = screen.getByRole('container');
    expect(mainContainer).toHaveClass('min-h-screen bg-gray-100');
  });
});
