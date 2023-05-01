import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { getPatients } from '@/services/api/patients';
import type { CredentialType } from '@/types/credential';

import { Table } from '..';
import { VIEW_PATIENT_COLUMNS } from '../columns/view-patient-columns';

export const ViewPatientsTable = () => {
  const [patients, setPatients] = useState<CredentialType[]>([]);

  const fetchPatients = async () => {
    try {
      const { data } = await getPatients();

      if (!data.success) {
        throw Error(data.message);
      }

      setPatients(data.data);
    } catch (err) {
      toast.error(String(err));
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);
  return <Table data={patients} columns={VIEW_PATIENT_COLUMNS} />;
};
