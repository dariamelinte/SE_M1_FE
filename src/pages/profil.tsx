import { useEffect, useState } from 'react';
import { useAuth } from 'react-oidc-context';

import { Button, GradientButton } from '@/components/Buttons';
import ProfileCard from '@/components/CompleteProfile/ProfileCard';
import ProfileForm from '@/components/CompleteProfile/ProfileForm';
import { Loading } from '@/components/Loading';
import { Banners } from '@/constants';
import useGetProfile from '@/hooks/useGetProfile';
import { withScrollTop } from '@/hooks/withScrollTop';
import { Page } from '@/layouts';
import useStore from '@/stores/participant';

const Profile: React.FC = () => {
  const [editProfile, setEditProfile] = useState(false);
  const { loading, data } = useGetProfile([editProfile]);
  const profile = useStore((store) => store.profile);
  const auth = useAuth();
  const authenticateUser = useStore((state) => state.authenticateUser);

  useEffect(() => {
    if (
      auth.isAuthenticated &&
      !auth.user?.profile.identifier &&
      !profile?.identifier &&
      !loading
    ) {
      setEditProfile(true);
    }
  }, [auth, setEditProfile, auth.isAuthenticated, loading]);

  if (loading && auth.isAuthenticated) {
    return (
      <Page theme={Banners.profil}>
        <div className="relative flex flex-col items-center justify-center py-4">
          <div className="my-8 flex flex-col rounded-xl bg-gray-200 py-4 px-8 shadow">
            <Loading />
          </div>
        </div>
      </Page>
    );
  }

  if (!auth.isAuthenticated) {
    return (
      <Page theme={Banners.profil}>
        <div className="relative flex flex-col items-center justify-center py-4">
          <div className="my-8 flex flex-col rounded-xl bg-gray-200 py-4 px-8 shadow">
            <GradientButton
              onClick={() => {
                authenticateUser(auth);
              }}
            >
              <div className="text-center text-2xl font-bold text-white">
                Va rugam sa va autentificati pentru a va putea inscrie
              </div>
            </GradientButton>
          </div>
        </div>
      </Page>
    );
  }

  return (
    <Page theme={Banners.profil}>
      <div className="relative flex flex-col items-center justify-center py-4">
        {editProfile ? (
          <ProfileForm
            data={data}
            onClickClose={() => {
              setEditProfile(false);
            }}
          />
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

export default withScrollTop(Profile);
