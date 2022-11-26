import { Banners } from '@/constants';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';
import useStore from '@/stores/participant';

const WebPage: React.FC = () => {
  const profile = useStore((state) => state.profile);
  return (
    <Page theme={Banners.mainpage}>
      <div>
        <p>{profile?.email}</p>
        <p>{profile?.family_name}</p>
        <p>{profile?.given_name}</p>
      </div>
    </Page>
  );
};

export default withScrollTop(WebPage);
