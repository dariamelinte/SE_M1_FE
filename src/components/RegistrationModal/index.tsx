import { Dialog, Transition } from '@headlessui/react';
import React, { useCallback, useState } from 'react';

import type { SectionsType } from '@/constants/sections';

import { RegisterBody } from './RegisterBody';
import styles from './RegistrationModal.module.css';

type RegistrationModalProps = {
  initialSection: SectionsType;
  onCloseModal: () => void;
  isOpen: boolean;
};

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  initialSection,
  onCloseModal,
  isOpen,
}) => {
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className={styles.dialog} onClose={onCloseModal}>
        <div className={styles.container}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          {/* Actual body of the modal */}
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className={styles.modalContainer}>
              <RegisterBody
                initialSection={initialSection}
                onClickClose={onCloseModal}
              />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
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
