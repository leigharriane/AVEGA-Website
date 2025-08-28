"use client";

import { ReactNode } from "react";
import Modal from "./Modal";

export default function ModalWrapper({ children }: { children: ReactNode }) {
  return <Modal>{children}</Modal>;
}
