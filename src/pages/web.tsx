import { Area } from '@/components/Area';
import {
  RegistrationModal,
  useRegistrationModal,
} from '@/components/RegistrationModal';
import SpeakersPresentation from '@/components/Speakers';
import { WebText } from '@/components/Texts';
import { Banners, Sections } from '@/constants';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const WebPage: React.FC = () => {
  const { setOpen, open, onRequestClose } = useRegistrationModal({
    onRegister: () => console.log('register ...'),
  });

  return (
    <Page theme={Banners.web}>
      <div className="pt-10">
        <Area type={1}>
          <WebText openModel={() => setOpen(true)} />
        </Area>
      </div>
      <SpeakersPresentation />

      <RegistrationModal
        initialSection={Sections.web}
        isOpen={open}
        onCloseModal={onRequestClose}
      />
    </Page>
  );
};

export default withScrollTop(WebPage);
