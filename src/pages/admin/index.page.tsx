import { AdminMenu } from '@/components/Admin/Menu/AdminMenu';
import { ApproveDoctorsTable } from '@/components/Table/tables/ApproveDoctorsTable';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const Admin = () => {
  return (
    <Page admin ariaLabel="admin-page">
      <AdminMenu />
      <ApproveDoctorsTable />
    </Page>
  );
};

export default withScrollTop(Admin);
