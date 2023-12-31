import React, { useState } from 'react'
import api from '@/services/api'
import { ModalBody, ModalFooter, ModalHeader } from '@nextui-org/modal'
import AlertComponent from '@/app/components/Alert'
import { Checkbox, Input } from '@nextui-org/react'
import { Button } from '@nextui-org/button'

type Props = {
  user: any
  setUser: any
}

type Errors = {
  [key: string]: {
    field: string
    message: string
  }
}

// @ts-ignore
export default function RegisterForm({ user, setUser }: Props) {
  const [errors, setErrors] = useState({} as Errors)
  const [rememberMe, setRememberMe] = React.useState(false)

  function sortErrors(errors: any) {
    const errorsSorted = {}
    for (const errorIndex in errors) {
      const error = errors[errorIndex]
      console.log(error)
      // @ts-ignore
      errorsSorted[error.field] = {
        field: error.field,
        message: error.message
      }
    }
    setErrors(errorsSorted)
  }

  const register = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const response = await api.post('/auth/register', {
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value,
        username: event.currentTarget.username.value,
        repeat_password: event.currentTarget.repeat_password.value,
        rememberMe: rememberMe
      })

      setUser({
        user: response.data.user,
        isConnected: true,
        error: null
      })
    } catch (e: any) {
      sortErrors(e.response.data.errors)
      return;
    }
  }

  return (
      <form onSubmit={register}>
        <ModalHeader
            className="flex flex-col gap-1 items-center justify-center text-3xl">Inscription</ModalHeader>
        <ModalBody>
          <Input
              autoFocus
              name="username"
              label="Nom d'utilisateur"
              placeholder="Entrez votre nom d'utilisateur"
              variant="bordered"
              color={errors.username ? 'danger' : 'primary'}
              errorMessage={errors.username?.message}
          />
            <Input
                autoFocus
                name="email"
                label="Email"
                placeholder="Entrez votre email"
                variant="bordered"
                color={errors.email ? 'danger' : 'primary'}
                errorMessage={errors.email?.message}
            />
          <div className="flex space-x-4">
            <Input
                label="Mot de passe"
                name="password"
                placeholder="Entrez votre mot de passe"
                type="password"
                variant="bordered"
                color={errors.password ? 'danger' : 'primary'}
                errorMessage={errors.password?.message}
            />
            <Input
                label="Répetez votre mot de passe"
                name="repeat_password"
                placeholder="Entrez votre mot de passe"
                type="password"
                variant="bordered"
                color={errors.repeat_password ? 'danger' : 'primary'}
                errorMessage={errors.repeat_password?.message}
            />
          </div>

          <div className="flex py-2 px-1 justify-between">
            <Checkbox
                isSelected={rememberMe}
                onValueChange={setRememberMe}
                classNames={{
                  label: 'text-small'
                }}
            >
              Se souvenir de moi
            </Checkbox>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button fullWidth color="primary" type="submit">
            Inscription
          </Button>
        </ModalFooter>
      </form>
  )

}