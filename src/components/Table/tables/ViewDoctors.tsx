import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { getDoctors } from '@/services/api/doctors';
import type { CredentialType } from '@/types/credential';

import { Table } from '..';
import { VIEW_DOCTOR_COLUMNS } from '../columns/view-doctor-columns';

export const ViewDoctorsTable = () => {
  const [doctors, setDoctors] = useState<CredentialType[]>([]);

  const fetchDoctors = async () => {
    try {
      const { data } = await getDoctors();

      if (!data.success) {
        throw Error(data.message);
      }

      setDoctors(data.data);
    } catch (err) {
      toast.error(String(err));
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return <Table data={doctors} columns={VIEW_DOCTOR_COLUMNS} />;
};
