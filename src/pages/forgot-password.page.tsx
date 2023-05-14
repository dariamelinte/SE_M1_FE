import Image from 'next/image';

import logo from '@/assets/images/logo-mare.png';
import { ForgotPassword } from '@/components/Forms/ForgotPassword/ForgotPassword';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const ForgotPasswordPage = () => {
  return (
    <Page ariaLabel="forgot-password-page">
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-blue-100">
        <div className="w-1/5">
          <Image src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-center rounded border-t-[7px] border-blue-500 bg-white p-10">
          <ForgotPassword />
        </div>
      </div>
    </Page>
  );
};

export default withScrollTop(ForgotPasswordPage);
