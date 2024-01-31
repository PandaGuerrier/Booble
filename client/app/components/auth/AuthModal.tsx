import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/modal'
import { Button, Card, CardBody, NavbarItem, Tab, Tabs } from '@nextui-org/react'
import React from 'react'

// @ts-ignore
export default function AuthModal({autoOpen = false}) {
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure()

  React.useEffect(() => {
    if (autoOpen) {
      onOpen()
    }
  }, [])

  return (
      <>
        <NavbarItem>
          <Button onPress={() => {
            onOpen()
          }} color="primary" variant="solid" radius="full">
            Inscription
          </Button>
        </NavbarItem>
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
                      <Tabs
                          fullWidth
                          size="md"
                          aria-label="Tabs form"
                      >
                        <Tab key="register" title="Point point point ...">
                          <ModalHeader className="flex flex-col gap-1 items-center justify-center text-3xl">Vous êtes
                            tombé dans le piège ...</ModalHeader>
                          <ModalBody>
                            <div>
                              La bulle de filtre utilise vos donnés, comme email, prénom, nom, etc ... pour vous
                              proposer des résultats concernant vos recherches et vous enfermer dans votre bulle !!
                            </div>
                          </ModalBody>
                          <ModalFooter>
                            <Button fullWidth color="danger" onClick={onClose}>
                              Fermer !
                            </Button>
                          </ModalFooter>
                        </Tab>
                      </Tabs>
                    </CardBody>
                  </Card>
                </div>
            )}
          </ModalContent>
        </Modal>
      </>
  )
}