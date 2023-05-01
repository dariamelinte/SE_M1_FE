import React, { useMemo } from 'react';

import { Table } from '..';
import { APPROVE_DOCTOR_COLUMNS } from '../columns/approve-doctor-columns';
import { data } from './__mock__doctors';

export const ApproveDoctorsTable = () => {
  const approvedDoctors = useMemo(
    () => data.filter((doctor) => !doctor.isConfirmed),
    [data]
  );

  return <Table data={approvedDoctors} columns={APPROVE_DOCTOR_COLUMNS} />;
};
