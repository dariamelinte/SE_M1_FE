import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import { getDoctors } from '@/services/api/doctors';

import { ViewDoctorsTable } from './ViewDoctors';

jest.mock('@/services/api/doctors');

describe('ViewDoctorsTable', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the table with the expected columns', async () => {
    const mockDoctorsData = [
      {
        id: 1,
        name: 'Dr. John Doe',
        email: 'john.doe@example.com',
        isConfirmed: true,
      },
      {
        id: 2,
        name: 'Dr. Jane Smith',
        email: 'jane.smith@example.com',
        isConfirmed: true,
      },
    ];

    // @ts-ignore
    getDoctors.mockResolvedValueOnce({
      data: { success: true, data: mockDoctorsData },
    });

    render(<ViewDoctorsTable />);

    await waitFor(() => expect(getDoctors).toHaveBeenCalledTimes(1));

    // Wait for the table to load
    await screen.findByRole('table');

    expect(screen.getByText('Doctor Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();

    mockDoctorsData.forEach((doctor) => {
      expect(screen.getByText(doctor.name)).toBeInTheDocument();
      expect(screen.getByText(doctor.email)).toBeInTheDocument();
      expect(
        screen.getByText(doctor.isConfirmed ? 'Active' : 'Inactive')
      ).toBeInTheDocument();
    });
  });

  it('should render an error message if there is an error fetching doctors', async () => {
    const errorMessage = 'An error occurred while fetching doctors.';
    // @ts-ignore
    getDoctors.mockRejectedValueOnce(new Error(errorMessage));

    render(<ViewDoctorsTable />);

    await waitFor(() => expect(getDoctors).toHaveBeenCalledTimes(1));

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
