import axios from 'axios';
import cx from 'classnames';
import React, { useState } from 'react';

import type { Data } from '@/components/RegistrationModal';
import type {
  AlgFormValues,
  BaseFormValues,
} from '@/components/RegistrationModal/components';
import { DiscordCodeBody } from '@/components/RegistrationModal/DiscordCodeBody';
import { RegisterBody } from '@/components/RegistrationModal/RegisterBody';
import styles from '@/components/RegistrationModal/RegistrationModal.module.css';
import { Sections } from '@/constants/sections';
import { API_URL } from '@/types/contestant';

const FormPage: React.FC = () => {
  const [discordCode, setDiscordCode] = useState<string | null>(null);
  const onRegister = async (values: BaseFormValues | AlgFormValues) => {
    try {
      const selectedArea = 1;

      const toSendData = {} as Data;
      toSendData.selectedArea = selectedArea;

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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={cx(
        styles.container,
        'bg-slate-200 flex justify-center items-center'
      )}
    >
      <div className={styles.modalContainer}>
        {discordCode ? (
          <DiscordCodeBody discordCode={discordCode} english />
        ) : (
          <RegisterBody
            english
            initialSection={Sections.algorithmics}
            onRegister={onRegister}
          />
        )}
      </div>
    </div>
  );
};

export default FormPage;
