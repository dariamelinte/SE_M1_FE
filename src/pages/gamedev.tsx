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
  const { open, setOpen, onRequestClose } = useRegistrationModal({
    onRegister: () => console.log('register ...'),
  });
  return (
    <Page theme={Banners.gamedev}>
      <div className="pt-10">
        <Area type={3}>
          <GameDevText openModel={() => setOpen(true)} />
        </Area>
      </div>
      <RegistrationModal
        initialSection={Sections.gamedev}
        isOpen={open}
        onCloseModal={onRequestClose}
      />
      <SpeakersPresentation />
    </Page>
  );
};

export default withScrollTop(GamedevPage);
