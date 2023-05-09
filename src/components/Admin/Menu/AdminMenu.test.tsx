import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import useAdminStore from '@/stores/admin';
import { ADMIN_MENU } from '@/utils/admin-menu';

import { AdminMenu } from './AdminMenu';

// Mock the useRouter hook to prevent errors
jest.mock('next/router');

describe('AdminMenu', () => {
  beforeEach(() => {
    // Reset the store before each test
    useAdminStore.setState({ activeLink: undefined });
  });

  test('should update active link and navigate to correct route on button click', () => {
    // Render the component
    render(<AdminMenu />);

    // Find the "Approve Doctors" button and click it
    const approveDoctorsButton = screen.getByText('Approve Doctors');
    fireEvent.click(approveDoctorsButton);

    // Check that the store was updated correctly
    expect(useAdminStore.getState().activeLink).toEqual(
      ADMIN_MENU.APPROVE_DOCTORS
    );

    // Check that the router was called with the correct route
    expect(useRouter().push).toHaveBeenCalledWith('/admin/');

    // Find the "View Doctors" button and click it
    const viewDoctorsButton = screen.getByText('View Doctors');
    fireEvent.click(viewDoctorsButton);

    // Check that the store was updated correctly
    expect(useAdminStore.getState().activeLink).toEqual(
      ADMIN_MENU.VIEW_DOCTORS
    );

    // Check that the router was called with the correct route
    expect(useRouter().push).toHaveBeenCalledWith('/admin/view-doctors');

    // Find the "View Patients" button and click it
    const viewPatientsButton = screen.getByText('View Patients');
    fireEvent.click(viewPatientsButton);

    // Check that the store was updated correctly
    expect(useAdminStore.getState().activeLink).toEqual(
      ADMIN_MENU.VIEW_PATIENTS
    );

    // Check that the router was called with the correct route
    expect(useRouter().push).toHaveBeenCalledWith('/admin/view-patients');
  });
});
