"use client";

import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@heroui/react";
import { ReactNode } from "react";
import { LuTrash } from "react-icons/lu";

export default function DeleteProvider({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <div>
      <Button onPress={onOpen} color="danger">
        <LuTrash size="20" />
      </Button>
      <Modal
        className="bg-orange-400"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                {children}
                <Button onPress={onClose}>Cancelar</Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
