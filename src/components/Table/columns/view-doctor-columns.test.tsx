import { render, screen } from '@testing-library/react';

import { VIEW_DOCTOR_COLUMNS } from './view-doctor-columns';

describe('VIEW_DOCTOR_COLUMNS', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the columns with the expected headers', () => {
    render(
      <table>
        <thead>
          <tr>
            {VIEW_DOCTOR_COLUMNS.map((column) => (
              <th key={column.header}>{column.header}</th>
            ))}
          </tr>
        </thead>
      </table>
    );
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });
});
