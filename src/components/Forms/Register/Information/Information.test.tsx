import { fireEvent, render, screen } from '@testing-library/react';
import { Formik } from 'formik';

import { Information, initialValues, validationSchema } from './Information';

// Mock useRouter to avoid Next.js router errors
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

describe('Information component', () => {
  test('correct completion of the form', async () => {
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
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Information />
      </Formik>
    );

    // Fill out the form
    const lastNameInput = screen.getByPlaceholderText('Last Name');
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    expect(lastNameInput).toHaveValue('Doe');

    const firstNameInput = screen.getByPlaceholderText('First Name');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput).toHaveValue('John');

    const dateOfBirthInput = screen.getByPlaceholderText('Birth Date');
    fireEvent.change(dateOfBirthInput, {
      target: { value: '1990-01-01' },
    });
    expect(dateOfBirthInput).toHaveValue('1990-01-01');
  });
});
