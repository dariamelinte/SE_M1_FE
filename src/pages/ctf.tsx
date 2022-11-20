import { Area } from '@/components/Area';
import {
  RegistrationModal,
  useRegistrationModal,
} from '@/components/RegistrationModal';
import SpeakersPresentation from '@/components/Speakers';
import { CtfText } from '@/components/Texts';
import { Banners, Sections } from '@/constants';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const CtfPage: React.FC = () => {
  const { open, setOpen, onRequestClose } = useRegistrationModal({
    onRegister: () => console.log('register ...'),
  });

  return (
    <Page theme={Banners.ctf}>
      <div className="pt-10">
        <Area type={4}>
          <CtfText openModel={() => setOpen(true)} />
        </Area>
      </div>
      <RegistrationModal
        initialSection={Sections.ctf}
        isOpen={open}
        onCloseModal={onRequestClose}
      />
      <SpeakersPresentation />
    </Page>
  );
};

export default withScrollTop(CtfPage);
