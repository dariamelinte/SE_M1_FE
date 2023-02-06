import {
  RegistrationModal,
  useRegistrationModal,
} from '@/components/RegistrationModal';
import { Banners, Sections } from '@/constants';
import { Page } from '@/layouts';

const Register: React.FC = () => {
  const { open, onRequestClose } = useRegistrationModal({
    onRegister: () => console.log('register ...'),
    onClose: () => window.location.reload(),
  });
  return (
    <Page theme={Banners.gamedev}>
      <RegistrationModal
        initialSection={Sections.web}
        isOpen={open}
        onCloseModal={onRequestClose}
      />
    </Page>
  );
};

export default Register;
