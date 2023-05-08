import { render, screen } from '@testing-library/react';
import { toast } from 'react-toastify';

import { getDoctors } from '@/services/api/doctors';

import { ApproveDoctorsTable } from './ApproveDoctorsTable';

// Mock the getDoctors function to return a fixed set of data
jest.mock('@/services/api/doctors', () => ({
  getDoctors: jest.fn(() => ({
    data: {
      success: true,
      data: [
        {
          id: '1',
          lastName: 'Doctor 1',
          isConfirmed: false,
        },
        {
          id: '2',
          lastName: 'Doctor 2',
          isConfirmed: false,
        },
      ],
      message: '',
    },
  })),
}));

describe('ApproveDoctorsTable', () => {
  test('render the columns correctly', async () => {
    // Render the component
    render(<ApproveDoctorsTable />);

    // Check that the correct columns are displayed
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Corfirmation')).toBeInTheDocument();

    // Check that the API was called with the correct parameters
    expect(getDoctors).toHaveBeenCalled();

    // Check that toast.error was not called
    expect(toast.error).not.toHaveBeenCalled();
  });
});
