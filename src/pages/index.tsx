import { GradientButton } from '@/components/Buttons';
import CoderCard from '@/components/CoderCard';
import SectionPresentation from '@/components/SectionPresentation';
import SpeakersPresentation from '@/components/Speakers';
import { CoderText } from '@/components/Texts';
import { Banners } from '@/constants';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const Index = () => {
  return (
    <Page theme={Banners.mainpage}>
      <div className="pt-10">
        <div className="flex items-center justify-center">
          <CoderCard description={<CoderText />} />
        </div>

        <div className="flex items-center justify-center">
          <a href="https://discord.gg/8XVSvTFubQ">
            <GradientButton>
              <div className="text-2xl font-bold text-white">Discord</div>
            </GradientButton>
          </a>
        </div>

        <SectionPresentation />

        <div className="mb-3 flex items-center  justify-center">
          <GradientButton
            onClick={() => console.log('open registration modal')}
          >
            <div className="text-2xl font-bold text-white">Înscrie-te</div>
          </GradientButton>
        </div>
      </div>
      <SpeakersPresentation />
    </Page>
  );
};

export default withScrollTop(Index);
