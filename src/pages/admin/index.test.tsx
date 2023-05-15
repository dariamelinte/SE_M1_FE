import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';

import useUserStore from '@/stores/users';

import AdminPage from './index.page';

jest.mock('@/stores/users');
jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('AdminPage', () => {
  it('renders the Admin page', () => {
    (useUserStore as any).mockReturnValue({
      user: { role: 'ADMIN' },
    });
    (useRouter as any).mockReturnValue({
      replace: jest.fn(),
    });
    render(<AdminPage />);
    expect(
      screen.getByRole('container', { name: 'admin-page' })
    ).toBeInTheDocument();
  });

  it("redirects to home page if user's role is not ADMIN", () => {
    (useUserStore as any).mockReturnValue({
      user: { role: 'USER' },
    });
    (useRouter as any).mockReturnValue({
      replace: jest.fn(),
    });
    render(<AdminPage />);
    expect(toast.error).toHaveBeenCalledWith(
      'You do not have enough permission.'
    );
    expect(useRouter().replace).toHaveBeenCalledWith('/');
  });
});
