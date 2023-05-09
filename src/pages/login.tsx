import Image from 'next/image';

import logo from '@/assets/images/logo-mare.png';
import { Login } from '@/components/Forms/Login/Login';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const Index = () => {
  return (
    <Page>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-blue-100">
        <div className="w-1/5">
          <Image src={logo}></Image>
        </div>
        <div className="flex items-center justify-center rounded border-t-[7px] border-blue-500 bg-white p-10">
          <Login />
        </div>
      </div>
    </Page>
  );
};

export default withScrollTop(Index);
