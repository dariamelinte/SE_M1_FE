import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import React from 'react';

import useCredentialStore from '@/stores/credential';

import { Header } from '.';

jest.mock('@/stores/credential', () => ({
  __esModule: true,
  default: jest.fn(),
  useCredentialStore: jest.fn(),
}));

jest.mock('next/router', () => ({
  __esModule: true,
  default: {
    replace: jest.fn(),
  },
  useRouter: jest.fn(),
}));

describe('Header component', () => {
  const setCredential = jest.fn();
  const replace = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    // @ts-ignore
    useRouter.mockReturnValue({ replace });
    // @ts-ignore
    useCredentialStore.mockReturnValue({ setCredential });
  });

  it('renders logo and logout button', () => {
    render(<Header />);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByText('Log Out')).toBeInTheDocument();
  });

  it('logs out when logout button is clicked', () => {
    const mockReplace = jest.fn();
    // @ts-ignore
    useRouter.mockReturnValue({ replace: mockReplace });

    render(<Header />);
    fireEvent.click(screen.getByText('Log Out'));
    expect(mockReplace).toHaveBeenCalledWith('/login');
  });
});
