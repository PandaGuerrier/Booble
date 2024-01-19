import React, { useState } from 'react'
import api from '@/services/api'
import { ModalBody, ModalFooter, ModalHeader } from '@nextui-org/modal'
import AlertComponent from '@/app/components/Alert'
import { Checkbox, Input, Link } from '@nextui-org/react'
import { Button } from '@nextui-org/button'

// @ts-ignore
export default function LoginForm({ user, setUser }) {

  const [error, setError] = useState('null')
  const [rememberMe, setRememberMe] = React.useState(false)

  const login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await api.post('/auth/login', {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
      rememberMe: rememberMe
    })

    if (response.status != 200) {
      setError('Adresse email ou mot de passe inconnue.')
    } else {
      setUser({
        user: response.user,
        isConnected: true,
        error: null
      })
    }
  }

  return (
      <form onSubmit={login}>
        <ModalHeader
            className="flex flex-col gap-1 items-center justify-center text-3xl">Connexion</ModalHeader>
        <AlertComponent message={error}/>
        <ModalBody>
          <Input
              autoFocus
              name="email"
              label="Email"
              placeholder="Entrez votre email"
              variant="bordered"
              color={'primary'}
          />
          <Input
              label="Mot de passe"
              name="password"
              placeholder="Entrez votre mot de passe"
              type="password"
              variant="bordered"
              color={'primary'}
          />
          <div className="flex py-2 px-1 justify-between">
            <Checkbox
                isSelected={rememberMe}
                onValueChange={setRememberMe}
                classNames={{
                  label: 'text-small'
                }}
                color={'primary'}
            >
              Se souvenir de moi
            </Checkbox>
            <Link color="primary" href="#" size="sm">
              Mot de passe oublié ?
            </Link>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button fullWidth color="primary" type="submit">
            Connexion
          </Button>
        </ModalFooter>
      </form>
  )

}