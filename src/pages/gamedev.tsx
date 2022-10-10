import { Area } from '@/components/Area';
import SpeakersPresentation from '@/components/Speakers';
import { GameDevText } from '@/components/Texts';
import { Banners } from '@/constants';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const GamedevPage: React.FC = () => {
  return (
    <Page theme={Banners.gamedev}>
      <div className="pt-10">
        <Area type={0}>
          <GameDevText
            openModel={() => console.log('open registration modal')}
          />
        </Area>
      </div>
      <SpeakersPresentation />
    </Page>
  );
};

export default withScrollTop(GamedevPage);
