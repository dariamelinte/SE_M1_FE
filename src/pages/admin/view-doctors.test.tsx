import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';

import useCredentialStore from '@/stores/credential';

import ViewDoctorsPage from './view-doctors.page';

jest.mock('@/stores/credential');
jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('ViewDoctorsPage', () => {
  it('renders the ViewDoctors page', () => {
    (useCredentialStore as any).mockReturnValue({
      credential: { role: 'ADMIN' },
    });
    (useRouter as any).mockReturnValue({
      replace: jest.fn(),
    });
    render(<ViewDoctorsPage />);
    expect(
      screen.getByRole('container', { name: 'view-doctors-page' })
    ).toBeInTheDocument();
  });

  it("redirects to home page if user's role is not ADMIN", () => {
    (useCredentialStore as any).mockReturnValue({
      credential: { role: 'USER' },
    });
    (useRouter as any).mockReturnValue({
      replace: jest.fn(),
    });
    render(<ViewDoctorsPage />);
    expect(toast.error).toHaveBeenCalledWith(
      'You do not have enough permission.'
    );
    expect(useRouter().replace).toHaveBeenCalledWith('/');
  });
});
