export const VIEW_PATIENT_COLUMNS = [
  {
    header: 'Last Name',
    accessorKey: 'lastName',
  },
  {
    header: 'First Name',
    accessorKey: 'firstName',
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
  {
    header: 'Phone Number',
    accessorKey: 'phoneNumber',
  },
  {
    header: 'Birth Date',
    accessorKey: 'dateOfBirth',
    cell: ({ getValue }: any) => {
      const date = new Date(getValue());
      console.log(getValue(), date);
      return date.toDateString();
    },
  },
];
