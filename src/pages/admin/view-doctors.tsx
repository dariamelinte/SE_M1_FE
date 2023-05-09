import { AdminMenu } from '@/components/Admin/Menu/AdminMenu';
import { ViewDoctorsTable } from '@/components/Table/tables/ViewDoctors';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const ViewDoctors = () => {
  // const { open, setOpen, onRequestClose } = useRegistrationModal({
  //   onRegister: () => console.log('register ...'),
  // });

  return (
    <Page admin>
      <AdminMenu />
      <ViewDoctorsTable />
    </Page>
  );
};

export default withScrollTop(ViewDoctors);
