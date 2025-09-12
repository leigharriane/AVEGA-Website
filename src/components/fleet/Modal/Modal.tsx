"use client";

import {
  Close,
  Content,
  Overlay,
  Portal,
  Root,
  Title,
} from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import CloseIcon from "../../../../public/icons/Close";

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 10);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      router.back();
    }, 200);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <Root open defaultOpen>
      <Portal>
        <Overlay
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black opacity-50"
        />
        <Content className="fixed top-1/2 left-1/2 max-w-lg w-full bg-white rounded-md shadow-lg transform -translate-x-1/2 -translate-y-1/2 flex flex-col max-h-[85vh]">
          <Title></Title>
          <div className="p-4 flex justify-end">
            <Close asChild>
              <button
                onClick={handleClose}
                className="text-lighterGray hover:text-lightGray cursor-pointer"
                aria-label="Close modal"
              >
                <CloseIcon />
              </button>
            </Close>
          </div>
          <div className="overflow-y-auto">{children}</div>
          <div className="p-4"></div>
        </Content>
      </Portal>
    </Root>
  );
};

export default Modal;
