import { render, screen } from '@testing-library/react';

import { ViewPatientsTable } from './ViewPatients';

jest.mock('@/services/api/patients', () => ({
  getPatients: () => ({
    data: {
      success: true,
      data: [
        {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          phone: '+1-555-555-5555',
          isConfirmed: true,
        },
        {
          id: '2',
          name: 'Jane Doe',
          email: 'jane@example.com',
          phone: '+1-555-555-5555',
          isConfirmed: true,
        },
      ],
    },
  }),
}));

describe('ViewPatientsTable', () => {
  it('should render table with correct data', async () => {
    render(<ViewPatientsTable />);

    // Wait for the table to load
    const table = await screen.findByRole('table');

    // Check if table has the correct columns
    // eslint-disable-next-line
    const tableHeaders = table.querySelectorAll('thead th');
    expect(tableHeaders).toHaveLength(4);
    expect(tableHeaders[0]).toHaveTextContent('ID');
    expect(tableHeaders[1]).toHaveTextContent('Name');
    expect(tableHeaders[2]).toHaveTextContent('Email');
    expect(tableHeaders[3]).toHaveTextContent('Phone');

    // Check if table has the correct rows
    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(2);
    expect(tableRows[0]).toHaveTextContent('1');
    expect(tableRows[0]).toHaveTextContent('John Doe');
    expect(tableRows[0]).toHaveTextContent('john@example.com');
    expect(tableRows[0]).toHaveTextContent('+1-555-555-5555');
    expect(tableRows[1]).toHaveTextContent('2');
    expect(tableRows[1]).toHaveTextContent('Jane Doe');
    expect(tableRows[1]).toHaveTextContent('jane@example.com');
    expect(tableRows[1]).toHaveTextContent('+1-555-555-5555');
  });

  it('should display error message when failed to fetch patients', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    jest.mock('@/services/api/patients', () => ({
      getPatients: () => ({
        data: {
          success: false,
          message: 'Failed to fetch patients',
        },
      }),
    }));

    render(<ViewPatientsTable />);

    // Wait for the error toast to appear
    const errorToast = await screen.findByRole('alert');

    // Check if error message is displayed
    expect(errorToast).toHaveTextContent('Failed to fetch patients');
  });
});
