import Image from 'next/image';

import logo from '@/assets/images/logo-mare.png';
import { Information } from '@/components/Forms/Register/Information/Information';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const RegisterInformationPage = () => {
  return (
    <Page ariaLabel="register-information-page">
      <div className="w-fill flex h-[800px] flex-col items-center justify-center bg-blue-100">
        <div className="w-1/5">
          <Image src={logo} alt="logo" />
        </div>
        <div>
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-blue-100">1/2 Account information</p>
            </div>
            <div className="border-b-[5px] border-blue-500 p-[1.5px]">
              <p className="text-sm">2/2 Personal information</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-center rounded-l rounded-b border-t-[7px] border-blue-500 bg-white p-10">
            <Information />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default withScrollTop(RegisterInformationPage);
