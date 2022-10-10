import { Area } from '@/components/Area';
import SpeakersPresentation from '@/components/Speakers';
import { WebText } from '@/components/Texts';
import { Banners } from '@/constants';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const WebPage: React.FC = () => {
  return (
    <Page theme={Banners.web}>
      <div className="pt-10">
        <Area type={0}>
          <WebText openModel={() => console.log('open registration modal')} />
        </Area>
      </div>
      <SpeakersPresentation />
    </Page>
  );
};

export default withScrollTop(WebPage);
