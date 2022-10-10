import { GradientButton } from '@/components/Buttons';
import CoderCard from '@/components/CoderCard';
import {
  RegistrationModal,
  useRegistrationModal,
} from '@/components/RegistrationModal';
import SectionPresentation from '@/components/SectionPresentation';
import SpeakersPresentation from '@/components/Speakers';
import { CoderText } from '@/components/Texts';
import { Banners, Sections } from '@/constants';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const Index = () => {
  const { open, setOpen, onRequestClose } = useRegistrationModal({
    onRegister: () => console.log('register ...'),
  });

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
          <GradientButton onClick={() => setOpen(true)}>
            <div className="text-2xl font-bold text-white">Înscrie-te</div>
          </GradientButton>
        </div>
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

export default withScrollTop(Index);
