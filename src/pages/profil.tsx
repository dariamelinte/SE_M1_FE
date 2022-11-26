import { useState } from 'react';
import { useAuth } from 'react-oidc-context';

import { Button } from '@/components/Buttons';
import ProfileCard from '@/components/CompleteProfile/ProfileCard';
import ProfileForm from '@/components/CompleteProfile/ProfileForm';
import { Banners } from '@/constants';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';

const WebPage: React.FC = () => {
  const [editProfile, setEditProfile] = useState(false);

  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return (
      <Page theme={Banners.profil}>
        <div className="relative flex flex-col items-center justify-center py-4">
          <div className="my-8 flex flex-col rounded-xl bg-gray-200 py-4 px-8 shadow">
            <p className="mb-4 text-center text-xl font-semibold text-red-500">
              Va rugam sa va autentificati inainte de a accesa profilul dvs.
            </p>
          </div>
        </div>
      </Page>
    );
  }

  return (
    <Page theme={Banners.profil}>
      <div className="relative flex flex-col items-center justify-center py-4">
        {editProfile ? (
          <ProfileForm onClickClose={() => setEditProfile(false)} />
        ) : (
          <>
            <ProfileCard />
            <Button
              className="mt-4"
              theme="algorithmics"
              onClick={() => setEditProfile(true)}
            >
              Editeaza profilul
            </Button>
          </>
        )}
      </div>
    </Page>
  );
};

export default withScrollTop(WebPage);
