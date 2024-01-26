import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/modal'
import { Button, Card, CardBody, Link, NavbarItem, Tab, Tabs } from '@nextui-org/react'
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '@/app/components/Logo'

// @ts-ignore
export default function ModalLol() {
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure()

  return (
      <>
          <div onClick={
            () => {
              onOpen()
            }
          } className={"flex w-full justify-center"}>
            <Logo />
          </div>
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="center"
            size="2xl"
        >
          <ModalContent>
            {(onClose) => (
                <div className="flex flex-col w-full">
                  <Card className="max-w-full">
                    <CardBody className="overflow-hidden">
                          <ModalHeader className="flex flex-col gap-1 items-center justify-center text-3xl">❤️ Pour Clément ❤️</ModalHeader>
                          <ModalBody className={"flex w-full items-center justify-center"}>
                            <Image src={"/clement.png"} alt={"Clément pas chargé..."} width={250} height={250} className={"flex justify-center"} />
                          </ModalBody>
                          <ModalFooter>
                            <Button fullWidth color="danger" onClick={onClose}>
                              Fermer !
                            </Button>
                          </ModalFooter>
                    </CardBody>
                  </Card>
                </div>
            )}
          </ModalContent>
        </Modal>
      </>
  )
}