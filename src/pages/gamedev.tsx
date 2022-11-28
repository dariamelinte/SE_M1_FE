import { Area } from '@/components/Area';
import {
  RegistrationModal,
  useRegistrationModal,
} from '@/components/RegistrationModal';
import SpeakersPresentation from '@/components/Speakers';
import { GameDevText } from '@/components/Texts';
import { Banners, Sections } from '@/constants';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const GamedevPage: React.FC = () => {
  const { setOpen, open, onRequestClose } = useRegistrationModal({
    onRegister: () => console.log('register ...'),
  });
  return (
    <Page theme={Banners.gamedev}>
      <div className="pt-10">
        <Area type={2}>
          <GameDevText openModel={() => setOpen(true)} />
        </Area>
      </div>
      <SpeakersPresentation />

      <RegistrationModal
        initialSection={Sections.gamedev}
        isOpen={open}
        onCloseModal={onRequestClose}
      />
    </Page>
  );
};

export default withScrollTop(GamedevPage);
