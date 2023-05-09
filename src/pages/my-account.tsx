import { MyAccount } from '@/components/MyAccount';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const Index = () => {
  return (
    <Page>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-white">
        <div className="flex items-center justify-center">
          <MyAccount />
        </div>
      </div>
    </Page>
  );
};

export default withScrollTop(Index);
