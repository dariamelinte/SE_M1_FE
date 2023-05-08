import { render, screen } from '@testing-library/react';
import React from 'react';

import Page from '.';

describe('Page component', () => {
  test('renders without crashing', () => {
    render(<Page />);
    expect(screen.getByText('MedConnect')).toBeInTheDocument();
  });
});
