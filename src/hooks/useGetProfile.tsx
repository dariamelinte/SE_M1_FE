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

const useGetProfile = (refetchParams: any[] = []) => {
  const [loading, setLoading] = useState(true);
  const [loadingToken, setLoadingToken] = useState(true);
  const [data, setData] = useState<Profile>(INITIAL_PROFILE);
  const profile = useStore((state) => state.profile);
  const accessToken = useStore((state) => state.access_token);
  const setUserProfile = useStore((state) => state.setUserProfile);

  // console.log(refetchParams);

  // console.log("[USE GET PROFILE]", { accessToken });
  useEffect(() => {
    if (!accessToken && loadingToken === false) {
      setLoadingToken(true);
    }

    if (accessToken && loadingToken === true) {
      setLoadingToken(false);
    }
  }, [accessToken, loading, ...refetchParams]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await getProfile(accessToken);
        // console.log(response.data);
        setData(response.data);
        setUserProfile({
          ...response.data,
          phone: profile?.phone || response.data.phone,
          identifier: profile?.identifier || response.data.identifier,
          firstName: profile?.firstName || response.data.firstName,
          lastName: profile?.lastName || response.data.lastName,
          email: profile?.email || response.data.email,
        });
      } catch (error: any) {
        toast.error(error?.message || ERROR_MESSAGES.default);
      }
      setLoading(false);
    };

    if (!loadingToken) {
      fetchData();
    }
  }, [loadingToken, ...refetchParams]);

  return { loading, data };
};

export default useGetProfile;
