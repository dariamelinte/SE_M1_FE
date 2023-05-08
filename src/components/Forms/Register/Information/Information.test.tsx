import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';
import * as yup from 'yup';

import { Information } from './Information';

// Mock useRouter to avoid Next.js router errors
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

describe('Information component', () => {
  test('submitting the form with valid data calls register API and navigates to login', async () => {
    // Mock register API
    const mockRegister = jest.fn(() => ({
      data: { success: true, message: 'Registration successful' },
    }));
    jest.mock('@/services/api/register', () => ({
      register: mockRegister,
    }));

    // Render component wrapped in Formik
    const onSubmit = jest.fn();
    render(
      <Formik
        initialValues={{ firstName: '', lastName: '', dateOfBirth: '' }}
        validationSchema={yup.object({
          firstName: yup.string().required(),
          lastName: yup.string().required(),
          dateOfBirth: yup.date().required(),
        })}
        onSubmit={onSubmit}
      >
        {() => <Information />}
      </Formik>
    );

    // Fill out the form
    const lastNameInput = screen.getByPlaceholderText('Last Name');
    userEvent.type(lastNameInput, 'Doe');

    const firstNameInput = screen.getByPlaceholderText('First Name');
    userEvent.type(firstNameInput, 'John');

    const dateOfBirthInput = screen.getByPlaceholderText('Birth Date');
    fireEvent.change(dateOfBirthInput, {
      target: { value: '1990-01-01' },
    });

    const agreeCheckbox = screen.getByLabelText('I agree to my');
    fireEvent.click(agreeCheckbox);

    // Submit the form
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);

    // Expect API to be called with correct data
    expect(mockRegister).toHaveBeenCalledWith({
      email: undefined,
      phoneNumber: undefined,
      password: undefined,
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      role: 'PATIENT',
    });

    // Expect success toast message to be displayed
    await screen.findByText('Registration successful');

    // Expect router to navigate to login page
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });
});
