import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import React from 'react';

import useUserStore from '@/stores/users';

import { Header } from '.';

jest.mock('@/stores/users', () => ({
  __esModule: true,
  default: jest.fn(),
  useUserStore: jest.fn(),
}));

jest.mock('next/router', () => ({
  __esModule: true,
  default: {
    replace: jest.fn(),
  },
  useRouter: jest.fn(),
}));

describe('Header component', () => {
  const setUser = jest.fn();
  const replace = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    // @ts-ignore
    (useRouter as any).mockReturnValue({ replace });
    // @ts-ignore
    (useUserStore as any).mockReturnValue({ setUser });
  });

  it('renders logo and logout button', () => {
    render(<Header />);
    expect(
      screen.getByRole('container', { name: 'admin-header' })
    ).toBeInTheDocument();
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByText('Log Out')).toBeInTheDocument();
  });
});
