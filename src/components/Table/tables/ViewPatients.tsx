import React from 'react';

import { Table } from '..';
import { VIEW_PATIENT_COLUMNS } from '../columns/view-patient-columns';
import { data } from './__mock__patients';

export const ViewPatientsTable = () => {
  return <Table data={data} columns={VIEW_PATIENT_COLUMNS} />;
};
