import { render, screen } from '@testing-library/react';

import { AdminMenu } from './AdminMenu';

// Mock the useRouter hook to prevent errors
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe('AdminMenu', () => {
  test('The header buttons are seen', () => {
    // Render the component
    render(<AdminMenu />);

    expect(screen.getByText('Approve Doctors')).toBeInTheDocument();
    expect(screen.getByText('View Doctors')).toBeInTheDocument();
    expect(screen.getByText('View Patients')).toBeInTheDocument();
  });
});
