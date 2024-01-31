import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/modal'
import { Button, Card, CardBody } from '@nextui-org/react'
import React from 'react'
import Image from 'next/image'

// @ts-ignore
export default function ModalEnzolol() {
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure()

  return (
      <>
          <div onClick={
            () => {
              onOpen()
            }
          } className={"flex w-full justify-center"}>
            <Image src={'/elis.webp'} alt={'Elis pas chargé...'} width={350} height={50}
                   className={'rounded-full w-[150px] h-[150px] md:w-[250px] md:h-[250px] flex justify-center'}/>
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
                          <ModalHeader className="flex flex-col gap-1 items-center justify-center text-3xl">Enzo easter egg - AKA Bot Rouchard</ModalHeader>
                          <ModalBody className={"flex w-full items-center justify-center"}>
                            <Image src={"/rouchardd.png"} alt={"Clément pas chargé..."} width={250} height={250} className={"flex justify-center"} />
                          </ModalBody>
                          <ModalFooter>
                            <Button fullWidth color="danger" onClick={onClose}>
                              Inlove de bot rouchard
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