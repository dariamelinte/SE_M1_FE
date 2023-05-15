import { Button } from '@/components/Buttons';

export const VIEW_DOCTOR_COLUMNS = [
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
    header: 'Specialisation',
    accessorKey: 'specialisation.name',
    cell: ({ row }: any) =>
      row?.original?.specialisation?.name || 'No specialisation chosen.',
  },
  {
    header: 'Status',
    accessorKey: 'isConfirmed',
    cell: ({ getValue }: any) => {
      return getValue() ? (
        <Button size="text" theme="underlined-active" disabled>
          Accepted
        </Button>
      ) : (
        <Button size="text" theme="underlined-default" disabled>
          To be Confirmed
        </Button>
      );
    },
  },
];
