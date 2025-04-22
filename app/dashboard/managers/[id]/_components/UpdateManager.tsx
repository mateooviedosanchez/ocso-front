'use client';

import {
    Modal,
    ModalContent,
    ModalBody,
    Button,
    useDisclosure,
  } from "@heroui/react";
import { ReactNode } from "react";
import { LuPencil } from "react-icons/lu";
  
  export default function UpdateManager({children}: {children: ReactNode}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
    return (
      <div>
        <Button onPress={onOpen} color="primary"><LuPencil size="20" /></Button>
        <Modal className="bg-orange-400" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {() => (
              <>
                <ModalBody>
                    {children}
                </ModalBody>

              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    );
  }
  