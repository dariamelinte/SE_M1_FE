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
  const { setOpen, open, onRequestClose } = useRegistrationModal({
    onRegister: () => console.log('register ...'),
  });

  return (
    <Page theme={Banners.ctf}>
      <div className="pt-10">
        <Area type={3}>
          <CtfText openModel={() => setOpen(true)} />
        </Area>
      </div>
      <SpeakersPresentation />

      <RegistrationModal
        initialSection={Sections.ctf}
        isOpen={open}
        onCloseModal={onRequestClose}
      />
    </Page>
  );
};

export default withScrollTop(CtfPage);
