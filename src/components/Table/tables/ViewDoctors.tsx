import React from 'react';

import { Table } from '..';
import { VIEW_DOCTOR_COLUMNS } from '../columns/view-doctor-columns';
import { data } from './__mock__doctors';

export const ViewDoctorsTable = () => {
  return <Table data={data} columns={VIEW_DOCTOR_COLUMNS} />;
};
