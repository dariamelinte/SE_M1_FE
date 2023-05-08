import { fireEvent, render, screen } from '@testing-library/react';

import { MyAccount } from '.';

describe('MyAccount component', () => {
  it('completes form with valid input', async () => {
    render(<MyAccount />);

    const firstNameInput = screen.getByPlaceholderText('First name');
    fireEvent.change(firstNameInput, {
      target: { value: 'John' },
    });
    expect(firstNameInput).toHaveValue('John');

    const lastNameInput = screen.getByPlaceholderText('Last name');
    fireEvent.change(lastNameInput, {
      target: { value: 'Doe' },
    });
    expect(lastNameInput).toHaveValue('Doe');

    const cnpInput = screen.getByPlaceholderText('CNP');
    fireEvent.change(cnpInput, {
      target: { value: '1234567890123' },
    });
    expect(cnpInput).toHaveValue('1234567890123');

    const birthDateInput = screen.getByPlaceholderText('Birth date');
    fireEvent.change(birthDateInput, {
      target: { value: '1990-01-01' },
    });
    expect(birthDateInput).toHaveValue('1990-01-01');

    const sexInput = screen.getByPlaceholderText('Sex');
    fireEvent.change(sexInput, {
      target: { value: 'male' },
    });
    expect(sexInput).toHaveValue('male');

    const citizenshipInput = screen.getByPlaceholderText('Citizenship');
    fireEvent.change(citizenshipInput, {
      target: { value: 'Romania' },
    });
    expect(citizenshipInput).toHaveValue('Romania');

    const countryInput = screen.getByPlaceholderText('Country');
    fireEvent.change(countryInput, {
      target: { value: 'Romania' },
    });
    expect(countryInput).toHaveValue('Romania');

    const countyInput = screen.getByPlaceholderText('County');
    fireEvent.change(countyInput, {
      target: { value: 'Iasi' },
    });
    expect(countyInput).toHaveValue('Iasi');

    const cityInput = screen.getByPlaceholderText('City');
    fireEvent.change(cityInput, {
      target: { value: 'Iasi' },
    });
    expect(cityInput).toHaveValue('Iasi');

    const addressInput = screen.getByPlaceholderText('Complete adress');
    fireEvent.change(addressInput, {
      target: { value: 'Strada Ciresti' },
    });
    expect(addressInput).toHaveValue('Strada Ciresti');

    const phoneNumberInput = screen.getByPlaceholderText('Phone number');
    fireEvent.change(phoneNumberInput, {
      target: { value: '0751234567' },
    });
    expect(phoneNumberInput).toHaveValue('0751234567');

    const emailInput = screen.getByPlaceholderText('Email');
    fireEvent.change(emailInput, {
      target: { value: 'john.doe@example.com' },
    });
    expect(emailInput).toHaveValue('john.doe@example.com');
  });
});
