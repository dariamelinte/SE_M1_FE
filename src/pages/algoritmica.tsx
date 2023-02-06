import { Area } from '@/components/Area';
import {
  RegistrationModal,
  useRegistrationModal,
} from '@/components/RegistrationModal';
import SpeakersPresentation from '@/components/Speakers';
import { AlgoText } from '@/components/Texts';
import { Banners, Sections } from '@/constants';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const Algoritmica = () => {
  // const refresh = () => window.location.reload()

  const { setOpen, onRequestClose, open } = useRegistrationModal({
    onRegister: () => console.log('register ...'),
    onClose: () => window.location.reload(),
  });

  return (
    <Page theme={Banners.algorithmics}>
      <div className="pt-10">
        <Area type={0}>
          <AlgoText openModel={() => setOpen(true)} />
        </Area>
      </div>
      <SpeakersPresentation />

      <RegistrationModal
        initialSection={Sections.algorithmics}
        isOpen={open}
        onCloseModal={onRequestClose}
      />
    </Page>
  );
};

export default withScrollTop(Algoritmica);
