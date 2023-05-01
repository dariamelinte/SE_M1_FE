import { Button } from '@/components/Buttons';

export const APPROVE_DOCTOR_COLUMNS = [
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
    header: 'Corfirmation',
    accessorKey: 'isConfirmed',
    cell: () => (
      <div>
        <Button
          size="text"
          className="mr-1"
          theme="underlined-active"
          onClick={() => console.log('Accept')}
        >
          Accept
        </Button>
        <span className="px-2">/</span>
        <Button
          size="text"
          theme="underlined-negative"
          onClick={() => console.log('Decline')}
        >
          Decline
        </Button>
      </div>
    ),
  },
];
