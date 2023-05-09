import { render, screen } from '@testing-library/react';

import { ViewDoctorsTable } from './ViewDoctors';

jest.mock('@/services/api/patients', () => ({
  getDoctors: jest.fn(() => ({
    data: {
      success: true,
      data: [
        {
          id: '1',
          lastName: 'Doe',
          firstName: 'John',
          email: 'john@example.com',
          phone: '+1-555-555-5555',
          isConfirmed: true,
        },
        {
          id: '2',
          lastName: 'Doe',
          firstName: 'Jane',
          email: 'jane@example.com',
          phone: '+1-555-555-5555',
          isConfirmed: true,
        },
      ],
    },
  })),
}));

describe('ViewDoctorsTable', () => {
  it('should render table with correct data', async () => {
    render(<ViewDoctorsTable />);

    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });
});
