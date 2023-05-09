import { useRouter } from 'next/router';
import React from 'react';

import { Button } from '@/components/Buttons';
import useAdminStore from '@/stores/admin';
import { ADMIN_MENU } from '@/utils/admin-menu';

// export type AdminMenuProps = {

// }

export const AdminMenu = () => {
  const router = useRouter();
  const { activeLink, setActiveLink } = useAdminStore();

  return (
    <div className="flex w-full p-2">
      <Button
        className="mr-2 flex-1"
        theme={activeLink === ADMIN_MENU.APPROVE_DOCTORS ? 'active' : 'default'}
        onClick={() => {
          setActiveLink(ADMIN_MENU.APPROVE_DOCTORS);
          router.push('/admin/');
        }}
      >
        Approve Doctors
      </Button>
      <Button
        className="mr-2 flex-1"
        theme={activeLink === ADMIN_MENU.VIEW_DOCTORS ? 'active' : 'default'}
        onClick={() => {
          setActiveLink(ADMIN_MENU.VIEW_DOCTORS);
          router.push('/admin/view-doctors');
        }}
      >
        View Doctors
      </Button>
      <Button
        className="flex-1"
        theme={activeLink === ADMIN_MENU.VIEW_PATIENTS ? 'active' : 'default'}
        onClick={() => {
          setActiveLink(ADMIN_MENU.VIEW_PATIENTS);
          router.push('/admin/view-patients');
        }}
      >
        View Patients
      </Button>
    </div>
  );
};
