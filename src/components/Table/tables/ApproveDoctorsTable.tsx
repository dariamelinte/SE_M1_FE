import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { getDoctors } from '@/services/api/doctors';
import type { CredentialType } from '@/types/credential';

import { Table } from '..';
import { APPROVE_DOCTOR_COLUMNS } from '../columns/approve-doctor-columns';

export const ApproveDoctorsTable = () => {
  const [doctors, setDoctors] = useState<CredentialType[]>([]);

  const fetchDoctors = async () => {
    try {
      const { data } = await getDoctors();

      if (!data.success) {
        throw Error(data.message);
      }

      const filteredDoctors = data.data.filter((doctor) => !doctor.isConfirmed);
      setDoctors(filteredDoctors);
    } catch (err) {
      toast.error(String(err));
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return <Table data={doctors} columns={APPROVE_DOCTOR_COLUMNS} />;
};
