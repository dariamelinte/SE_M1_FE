import { AdminMenu } from '@/components/Admin/Menu/AdminMenu';
import { ViewPatientsTable } from '@/components/Table/tables/ViewPatients';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const ViewPatients = () => {
  return (
    <Page admin ariaLabel="view-patients-page">
      <AdminMenu />
      <ViewPatientsTable />
    </Page>
  );
};

export default withScrollTop(ViewPatients);
