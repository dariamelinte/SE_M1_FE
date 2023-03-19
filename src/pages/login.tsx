import { Login } from '@/components/Forms/Login';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const Index = () => {
  // const { open, setOpen, onRequestClose } = useRegistrationModal({
  //   onRegister: () => console.log('register ...'),
  // });

  return (
    <Page>
      <Login />
    </Page>
  );
};

export default withScrollTop(Index);
