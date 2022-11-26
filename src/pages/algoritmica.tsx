import { Area } from '@/components/Area';
import { useRegistrationModal } from '@/components/RegistrationModal';
import SpeakersPresentation from '@/components/Speakers';
import { AlgoText } from '@/components/Texts';
import { Banners } from '@/constants';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const Algoritmica = () => {
  const { setOpen } = useRegistrationModal({
    onRegister: () => console.log('register ...'),
  });

  return (
    <Page theme={Banners.algorithmics}>
      <div className="pt-10">
        <Area type={0}>
          <AlgoText openModel={() => setOpen(true)} />
        </Area>
      </div>
      <SpeakersPresentation />
    </Page>
  );
};

export default withScrollTop(Algoritmica);
