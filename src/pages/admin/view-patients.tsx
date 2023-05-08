import { AdminMenu } from '@/components/Admin/Menu/AdminMenu';
import { ViewPatientsTable } from '@/components/Table/tables/ViewPatients';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const ViewPatients = () => {
  // const { open, setOpen, onRequestClose } = useRegistrationModal({
  //   onRegister: () => console.log('register ...'),
  // });

  return (
    <Page admin>
      <AdminMenu />
      <ViewPatientsTable />
    </Page>
  );
};

export default withScrollTop(ViewPatients);
