import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Credentials } from './Credentials';

describe('Credentials', () => {
  // good
  test('renders the component', async () => {
    render(<Credentials />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone number')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByText('Confirm password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Create account' })
    ).toBeInTheDocument();
  });

  //     //good
  test('displays error message when there is no form input', async () => {
    render(<Credentials />);
    const submitButton = screen.getByRole('button', { name: 'Create account' });

    // Try submitting the form without filling out any fields
    fireEvent.click(submitButton);
    expect(await screen.findAllByText('Required field')).toHaveLength(4);
  });

  // good
  test('accepts valid form inputs', async () => {
    render(<Credentials />);
    const emailInput = screen.getByPlaceholderText('Email');
    const phoneNumberInput = screen.getByPlaceholderText('Phone number');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirma parola');
    const submitButton = screen.getByRole('button', { name: 'Create account' });

    // Fill out the form with valid inputs
    userEvent.clear(emailInput);
    userEvent.clear(phoneNumberInput);
    userEvent.clear(passwordInput);
    userEvent.clear(confirmPasswordInput);
    userEvent.type(emailInput, 'valid-email@example.com');
    userEvent.type(phoneNumberInput, '1234567890');
    userEvent.type(passwordInput, 'StrongPassword123');
    userEvent.type(confirmPasswordInput, 'StrongPassword123');
    fireEvent.click(submitButton);
    expect(await screen.findByText('Email')).toBeInTheDocument();
    expect(await screen.findByText('Phone number')).toBeInTheDocument();
    expect(await screen.findByText('Password')).toBeInTheDocument();
    expect(await screen.findByText('Confirm password')).toBeInTheDocument();
  });

  test('should navigate to the information page when the Create account button is clicked', async () => {
    render(<Credentials />);
    const nextButton = screen.queryAllByText('Create account');
    nextButton.forEach((element) => {
      if (element.tagName.toLowerCase() === 'button') {
        fireEvent.click(element);
      }
    });

    setTimeout(() => {
      expect(window.location.pathname).toEqual('/register-information');
    }, 10);
  });
});
