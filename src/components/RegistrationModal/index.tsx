import axios from 'axios';
import React, { useCallback, useState } from 'react';

import type { SectionsType } from '@/constants/sections';
import type { Contestant } from '@/types/contestant';
import { API_URL } from '@/types/contestant';

import type {
  AlgFormValues,
  BaseFormValues,
} from './components/contestant-form';
import { RegisterBody } from './RegisterBody';

type RegistrationModalProps = {
  initialSection: SectionsType;
  isOpen: boolean;
  onCloseModal: () => void;
};
export type Data = {
  selectedArea: number;
  teamName: string;
  teammates: Array<Contestant>;
  csacademy: string;
  highschool: string;
  city: string;
  state: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  shirtSize: string;
  section: number;
  CSAcademyUser?: string;
  Judet?: string;
  Localitatea?: string;
  HighSchool?: string;
};

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  initialSection,
}) => {
  const [discordCode, setDiscordCode] = useState<string>('');
  console.log({ discordCode });
  const onRegister = async (
    values: BaseFormValues | AlgFormValues,
    selectedSection: SectionsType
  ) => {
    try {
      const selectedAreaPos = {
        web: 2,
        algorithmics: 1,
        ctf: 4,
        gamedev: 3,
      };

      const selectedArea = selectedAreaPos[selectedSection];

      const toSendData = {} as Data;
      toSendData.selectedArea = selectedArea;

      if (selectedArea !== 1) {
        toSendData.teamName = values.teamName;
        toSendData.teammates = [...values.contestants];
        (toSendData.teammates[values.leaderIndex] as any).isLeader = true;

        axios({
          method: 'POST',
          url: `${API_URL}/teams/register`,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          data: JSON.stringify(toSendData),
        })
          .then(function (response) {
            setDiscordCode(response.data.data.DiscordCode);
          })
          .catch(function (error) {
            if (error.response.data) alert(error.response.data.message);
            else alert('Error handling your request. Please try again later.');
          });
        // setDiscordCode('xFG87BKAl');
      } else {
        toSendData.firstName = values.contestant.firstName;
        toSendData.lastName = values.contestant.lastName;
        toSendData.email = values.contestant.email;
        toSendData.phoneNumber = values.contestant.phoneNumber;
        toSendData.shirtSize = values.contestant.shirtSize;
        toSendData.section = selectedArea;
        toSendData.CSAcademyUser = values.contestant.csacademy;
        toSendData.Judet = values.contestant.state;
        toSendData.Localitatea = values.contestant.city;
        toSendData.HighSchool = values.contestant.highschool;

        axios({
          method: 'POST',
          url: `${API_URL}/teams/register`,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          data: JSON.stringify(toSendData),
        })
          .then(function (response) {
            setDiscordCode(response.data.data.DiscordCode);
          })
          .catch(function (error) {
            if (error.response.data) alert(error.response.data.message);
            else alert('Error handling your request. Please try again later.');
          });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <RegisterBody initialSection={initialSection} onRegister={onRegister} />
    </div>
  );
};

export interface UseRegistrationModalOptions {
  initialOpen?: boolean;
  onRegister: () => void;
  onClose?: () => void;
}

export function useRegistrationModal({
  initialOpen,
  onClose,
  onRegister,
}: UseRegistrationModalOptions) {
  const [open, setOpen] = useState(!!initialOpen);

  const onRequestClose = () => {
    setOpen(false);
    setTimeout(() => {
      onClose?.();
    }, 500);
  };

  const onRegisterWithClose = useCallback(async () => {
    await onRegister();
    onRequestClose();
  }, [onRegister, onRequestClose]);

  return { open, setOpen, onRequestClose, onRegister: onRegisterWithClose };
}
