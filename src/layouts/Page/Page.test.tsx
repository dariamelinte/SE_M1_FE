import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';

import useCredentialStore from '@/stores/credential';

import Page from '.';

jest.mock('@/stores/credential');
jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Page component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders children', () => {
    (useCredentialStore as any).mockReturnValue({
      credential: { role: 'USER' },
    });
    (useRouter as any).mockReturnValue({
      replace: jest.fn(),
    });
    render(
      <Page>
        <div>Test children</div>
      </Page>
    );
    expect(screen.getByText('Test children')).toBeInTheDocument();
  });

  it('renders Header component if admin prop is true', () => {
    (useCredentialStore as any).mockReturnValue({
      credential: { role: 'ADMIN' },
    });
    (useRouter as any).mockReturnValue({
      replace: jest.fn(),
    });

    render(<Page admin={true} />);
    expect(
      screen.getByRole('container', { name: 'admin-header' })
    ).toBeInTheDocument();
  });

  it('redirects to home page if admin prop is true and role is not ADMIN', () => {
    (useCredentialStore as any).mockReturnValue({
      credential: { role: 'USER' },
    });
    (useRouter as any).mockReturnValue({
      replace: jest.fn(),
    });
    render(<Page admin={true} />);
    expect(toast.error).toHaveBeenCalledWith(
      'You do not have enough permission.'
    );
    expect(useRouter().replace).toHaveBeenCalledWith('/');
  });
});
