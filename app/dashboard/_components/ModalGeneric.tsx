"use client";

import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Image,
  Button,
} from "@heroui/react";
import { ReactNode } from "react";

export default function ModalGeneric({
  children,
  icon,
  photo,
}: {
  children: ReactNode;
  icon: ReactNode;
  photo: string | undefined;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
        <Button color="primary" onPress={onOpen}>{icon}</Button>
      <Modal
        className="bg-orange-400"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
