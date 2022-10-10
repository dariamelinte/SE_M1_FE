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
  const { open, setOpen, onRequestClose } = useRegistrationModal({
    onRegister: () => console.log('register ...'),
  });

  return (
    <Page theme={Banners.algorithmics}>
      <div className="pt-10">
        <Area type={1}>
          <AlgoText openModel={() => setOpen(true)} />
        </Area>
      </div>
      <RegistrationModal
        initialSection={Sections.algorithmics}
        isOpen={open}
        onCloseModal={onRequestClose}
      />
      <SpeakersPresentation />
    </Page>
  );
};

export default withScrollTop(Algoritmica);
