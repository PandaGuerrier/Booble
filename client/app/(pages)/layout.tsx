'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getClientSession } from '@/functions/getClientSession/getClientSession'
import api from '@/services/api'
import { NextUIProvider } from '@nextui-org/react'
import { Button } from '@nextui-org/button'

const DashboardLayout = ({children}: { children: React.ReactNode }) => {

  const router = useRouter()

  useEffect(() => {
    (async () => {
      const {error, user} = await getClientSession()

      console.log(error?.message)

      if (error) {
        router.push('/')
        return
      }

    })()
  }, [router])

  return (
      <NextUIProvider>
        <div>
          <header className="flex gap-4">
            <p className="font-bold"> navigation </p>
            <Button href='/dashboard' className="text-pink-700">Dashboard</Button>
            <Button href={'/settings'} className="text-pink-700">Settings</Button>
            <button onClick={() => signOut().then(() => router.push('/'))}> Sign Out</button>
          </header>

          {children}
        </div>
      </NextUIProvider>
  )
}

async function signOut() {
  await api.delete('/auth/logout')
}

export default DashboardLayout