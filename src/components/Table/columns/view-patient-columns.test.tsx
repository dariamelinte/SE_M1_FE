import { render, screen } from '@testing-library/react';

import { VIEW_PATIENT_COLUMNS } from './view-patient-columns';

describe('VIEW_PATIENT_COLUMNS', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the columns with the expected headers', () => {
    render(
      <table>
        <thead>
          <tr>
            {VIEW_PATIENT_COLUMNS.map((column) => (
              <th key={column.header}>{column.header}</th>
            ))}
          </tr>
        </thead>
      </table>
    );
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone Number')).toBeInTheDocument();
  });
});
