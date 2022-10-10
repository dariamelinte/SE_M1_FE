import { Area } from '@/components/Area';
import SpeakersPresentation from '@/components/Speakers';
import { MarketingText } from '@/components/Texts';
import { Banners } from '@/constants';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const MarketingPage: React.FC = () => {
  return (
    <Page theme={Banners.marketing}>
      <div className="pt-10">
        <Area type={0}>
          <MarketingText
            openModel={() => console.log('open registration modal')}
          />
        </Area>
      </div>
      <SpeakersPresentation />
    </Page>
  );
};

export default withScrollTop(MarketingPage);
