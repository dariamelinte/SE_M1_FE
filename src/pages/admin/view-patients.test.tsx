import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';

import useCredentialStore from '@/stores/credential';

import ViewPatientsPage from './view-patients.page';

jest.mock('@/stores/credential');
jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('ViewPatientsPage', () => {
  it('renders the ViewPatients page', () => {
    (useCredentialStore as any).mockReturnValue({
      credential: { role: 'ADMIN' },
    });
    (useRouter as any).mockReturnValue({
      replace: jest.fn(),
    });
    render(<ViewPatientsPage />);
    expect(
      screen.getByRole('container', { name: 'view-patients-page' })
    ).toBeInTheDocument();
  });

  it("redirects to home page if user's role is not ADMIN", () => {
    (useCredentialStore as any).mockReturnValue({
      credential: { role: 'USER' },
    });
    (useRouter as any).mockReturnValue({
      replace: jest.fn(),
    });
    render(<ViewPatientsPage />);
    expect(toast.error).toHaveBeenCalledWith(
      'You do not have enough permission.'
    );
    expect(useRouter().replace).toHaveBeenCalledWith('/');
  });
});
