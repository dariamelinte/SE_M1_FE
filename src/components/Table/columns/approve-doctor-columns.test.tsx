import { render, screen } from '@testing-library/react';

import { APPROVE_DOCTOR_COLUMNS } from './approve-doctor-columns';

describe('APPROVE_DOCTOR_COLUMNS', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the columns with the expected headers', () => {
    render(
      <table>
        <thead>
          <tr>
            {APPROVE_DOCTOR_COLUMNS.map((column) => (
              <th key={column.header}>{column.header}</th>
            ))}
          </tr>
        </thead>
      </table>
    );
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Specialisation')).toBeInTheDocument();
    expect(screen.getByText('Corfirmation')).toBeInTheDocument();
  });
});
