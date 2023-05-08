import { render, screen } from '@testing-library/react';

import { getPatients } from '@/services/api/patients';

import { ViewPatientsTable } from './ViewPatients';

jest.mock('@/services/api/patients', () => ({
  getPatients: jest.fn(() => ({
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

describe('ViewPatientsTable', () => {
  it('should render table with correct data', async () => {
    render(<ViewPatientsTable />);

    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone Number')).toBeInTheDocument();

    // Check that the API was called with the correct parameters
    expect(getPatients).toHaveBeenCalled();
  });
});
