import { toast } from 'react-toastify';

import { Button } from '@/components/Buttons';
import { confirmDoctor } from '@/services/api/doctors';

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
    cell: ({ row }: any) => {
      const onConfirm = async (isAccepted: boolean) => {
        try {
          const { data } = await confirmDoctor({
            id: row?.original?.id,
            isAccepted,
          });

          if (!data.success) {
            throw Error(data.message);
          }

          toast.info(data.message);
        } catch (err) {
          toast.error(String(err));
        }
      };

      return (
        <div>
          <Button
            size="text"
            className="mr-1"
            theme="underlined-active"
            onClick={() => onConfirm(true)}
          >
            Accept
          </Button>
          <span className="px-2">/</span>
          <Button
            size="text"
            theme="underlined-negative"
            onClick={() => onConfirm(false)}
          >
            Decline
          </Button>
        </div>
      );
    },
  },
];
