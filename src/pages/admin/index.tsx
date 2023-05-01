import { AdminMenu } from '@/components/Admin/Menu';
import { ApproveDoctorsTable } from '@/components/Table/tables/ApproveDoctorsTable';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const Admin = () => {
  // const { open, setOpen, onRequestClose } = useRegistrationModal({
  //   onRegister: () => console.log('register ...'),
  // });

  return (
    <Page admin>
      <AdminMenu />
      <ApproveDoctorsTable />
    </Page>
  );
};

export default withScrollTop(Admin);
