import { AdminMenu } from '@/components/Admin/Menu/AdminMenu';
import { ViewDoctorsTable } from '@/components/Table/tables/ViewDoctors';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const ViewDoctors = () => {
  return (
    <Page admin ariaLabel="view-doctors-page">
      <AdminMenu />
      <ViewDoctorsTable />
    </Page>
  );
};

export default withScrollTop(ViewDoctors);
