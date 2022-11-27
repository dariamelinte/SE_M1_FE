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
  const [data, setData] = useState<Profile>(INITIAL_PROFILE);
  const setUserProfile = useStore((state) => state.setUserProfile);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await getProfile();
        setData(response);
        setUserProfile(data);
      } catch (error: any) {
        toast.error(error?.message || ERROR_MESSAGES.default);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { loading, data };
};

export default useGetProfile;
