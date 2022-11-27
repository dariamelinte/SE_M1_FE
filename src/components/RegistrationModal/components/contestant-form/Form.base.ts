import * as yup from 'yup';

export type TeamRegistrationType = string[];

export type ParticipantsFormType = {
  participantIds: TeamRegistrationType;
  leaderIndex: number;
};

const requiredField = 'Câmp obligatoriu';

export const validationSchema = yup.object().shape({
  leaderIndex: yup.number().required(requiredField),
  participantIds: yup.array().of(yup.string().required(requiredField)),
});
