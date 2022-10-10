import { Area } from '@/components/Area';
import SpeakersPresentation from '@/components/Speakers';
import { AlgoText } from '@/components/Texts';
import { Banners } from '@/constants';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const Algoritmica = () => {
  return (
    <Page theme={Banners.algorithmics}>
      <div className="pt-10">
        <Area type={0}>
          <AlgoText openModel={() => console.log('open registration modal')} />
        </Area>
      </div>
      <SpeakersPresentation />
    </Page>
  );
};

export default withScrollTop(Algoritmica);
