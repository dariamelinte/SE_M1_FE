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
          name: 'Doctor 1',
          isConfirmed: false,
        },
        {
          id: '2',
          name: 'Doctor 2',
          isConfirmed: true,
        },
        {
          id: '3',
          name: 'Doctor 3',
          isConfirmed: false,
        },
      ],
      message: '',
    },
  })),
}));

// Mock the toast function to prevent errors
jest.mock('react-toastify');

describe('ApproveDoctorsTable', () => {
  test('should fetch and render the list of unconfirmed doctors', async () => {
    // Render the component
    render(<ApproveDoctorsTable />);

    // Wait for the data to load
    const unconfirmedDoctors = await screen.findAllByText(/unconfirmed/i);

    // Check that the data is displayed correctly
    expect(unconfirmedDoctors).toHaveLength(2);
    expect(screen.getByText('Doctor 1')).toBeInTheDocument();
    expect(screen.getByText('Doctor 3')).toBeInTheDocument();

    // Check that the correct columns are displayed
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('License Number')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();

    // Check that the API was called with the correct parameters
    expect(getDoctors).toHaveBeenCalled();

    // Check that toast.error was not called
    expect(toast.error).not.toHaveBeenCalled();
  });

  test('should display an error message if the API call fails', async () => {
    // Mock the getDoctors function to throw an error
    // @ts-ignore
    getDoctors.mockRejectedValueOnce(new Error('API error'));

    // Render the component
    render(<ApproveDoctorsTable />);

    // Wait for the error message to appear
    const errorMessage = await screen.findByText(/api error/i);

    // Check that the error message is displayed
    expect(errorMessage).toBeInTheDocument();

    // Check that the API was called with the correct parameters
    expect(getDoctors).toHaveBeenCalled();

    // Check that toast.error was called with the error message
    expect(toast.error).toHaveBeenCalledWith('API error');
  });
});
