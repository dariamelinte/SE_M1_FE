import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { INITIAL_PROFILE } from '@/components/CompleteProfile/profile-form-base';
import ERROR_MESSAGES from '@/helpers/error-messages';
import { getProfile } from '@/services/api/profile';
import useStore from '@/stores/participant';
import type { Profile } from '@/types/profile';

export type DepartmentsType = {
  [key: string]: string;
};

const useGetProfile = () => {
  const [loading, setLoading] = useState(true);
  const [loadingToken, setLoadingToken] = useState(true);
  const [data, setData] = useState<Profile>(INITIAL_PROFILE);
  const profile = useStore((state) => state.profile);
  const accessToken = useStore((state) => state.access_token);
  const setUserProfile = useStore((state) => state.setUserProfile);

  // console.log("[USE GET PROFILE]", { accessToken });
  useEffect(() => {
    if (!accessToken && loadingToken === false) {
      setLoadingToken(true);
    }

    if (accessToken && loadingToken === true) {
      setLoadingToken(false);
    }
  }, [accessToken, loading]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await getProfile(accessToken);
        console.log(response);
        setData(response);
        setUserProfile({
          ...response,
          identifier: profile?.identifier || response.identifier,
          firstName: profile?.firstName || response.firstName,
          lastName: profile?.lastName || response.lastName,
          email: profile?.email || response.email,
        });
      } catch (error: any) {
        toast.error(error?.message || ERROR_MESSAGES.default);
      }
      setLoading(false);
    };

    if (!loadingToken) {
      fetchData();
    }
  }, [loadingToken]);

  return { loading, data };
};

export default useGetProfile;
