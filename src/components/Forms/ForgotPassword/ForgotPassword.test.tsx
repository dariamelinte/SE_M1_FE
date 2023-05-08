import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';
import * as yup from 'yup';

import { ForgotPassword } from './ForgotPassword';

describe('ForgotPassword', () => {
  const initialValues = {
    email: '',
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email('Email invalid').required('Required field'),
  });

  it('should submit the form when the Submit button is clicked with a valid email', async () => {
    const onSubmitMock = jest.fn();

    render(
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitMock}
      >
        <ForgotPassword />
      </Formik>
    );

    const emailInput = screen.getByPlaceholderText('Email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledWith({ email: 'test@example.com' });
  });

  it('should show an error message when the Submit button is clicked with an invalid email', async () => {
    render(<ForgotPassword />);

    const emailInput = screen.getByLabelText('Email');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    // Enter an invalid email address
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

    // Click the submit button
    userEvent.click(submitButton);

    // Verify that the validation error message is displayed
    expect(await screen.findByText('Email invalid')).toBeInTheDocument();
  });

  it('should navigate to the login page when the Login link is clicked', async () => {
    render(
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={jest.fn()}
      >
        <ForgotPassword />
      </Formik>
    );

    const loginLink = screen.getByText('Login');
    fireEvent.click(loginLink);

    expect(window.location.pathname).toEqual('/login');
  });

  it('should navigate to the register credentials page when the Create account link is clicked', async () => {
    render(
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={jest.fn()}
      >
        <ForgotPassword />
      </Formik>
    );

    const createAccountLink = screen.getByText('Create account');
    fireEvent.click(createAccountLink);

    expect(window.location.pathname).toEqual('/register-credentials');
  });
});
