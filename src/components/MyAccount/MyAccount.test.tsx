import { fireEvent, render, screen } from '@testing-library/react';

import { MyAccount } from '.';

describe('MyAccount component', () => {
  it('submits form with valid input', async () => {
    render(<MyAccount />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText('First name'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText('Last name'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText('CNP'), {
      target: { value: '1234567890123' },
    });
    fireEvent.change(screen.getByLabelText('Birth date'), {
      target: { value: '1990-01-01' },
    });
    fireEvent.change(screen.getByLabelText('Sex'), {
      target: { value: 'male' },
    });
    fireEvent.change(screen.getByLabelText('Citizenship'), {
      target: { value: 'Romania' },
    });
    fireEvent.change(screen.getByLabelText('Country'), {
      target: { value: 'Romania' },
    });
    fireEvent.change(screen.getByLabelText('County'), {
      target: { value: 'Iasi' },
    });
    fireEvent.change(screen.getByLabelText('City'), {
      target: { value: 'Iasi' },
    });
    fireEvent.change(screen.getByLabelText('Complete adress'), {
      target: { value: 'Strada Ciresti' },
    });
    fireEvent.change(screen.getByLabelText('Phone number'), {
      target: { value: '0751234567' },
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'john.doe@example.com' },
    });

    // Submit the form
    fireEvent.click(screen.getByText('Save'));

    // Check that the form was submitted successfully
    expect(await screen.findByText('{"firstName":"John",')).toBeInTheDocument();
  });
});
