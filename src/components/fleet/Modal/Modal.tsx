"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

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
    <div
      className={`absolute inset-0 z-50 flex items-baseline justify-center transition-opacity duration-200 ${
        show ? "bg-black/70 opacity-100" : "bg-black/0 opacity-0"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-11/12 max-w-xl relative transform transition-all duration-200 ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ position: "fixed", top: "10vh" }}
      >
        <div className="flex justify-end py-[20px] px-[40px]">
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
