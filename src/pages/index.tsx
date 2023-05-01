import Image from 'next/image';
import { useRouter } from 'next/router';

import logo from '@/assets/images/logo-mare.png';
import { Button } from '@/components/Buttons';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const Index = () => {
  const router = useRouter();
  return (
    <Page>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-blue-100">
        <div className="w-1/5">
          <Image alt="logo" src={logo} />
        </div>
        <Button className="my-2 w-1/5" onClick={() => router.push('/login')}>
          Log In
        </Button>
        <Button
          className="my-2 w-1/5"
          onClick={() => router.push('/register-credentials')}
        >
          Register
        </Button>
      </div>
    </Page>
  );
};

export default withScrollTop(Index);
