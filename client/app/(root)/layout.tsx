'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getClientSession } from '@/functions/getClientSession/getClientSession'
import { NextUIProvider, Spinner } from '@nextui-org/react'
import Navbar from '../components/NavBar'
import { AnimatePresence, motion } from 'framer-motion'

const HomeLayout = ({children}: { children: React.ReactNode }) => {
  const router = useRouter()
  const [getUser, setUser] = useState({} as any)
  const [isLoad, setLoading] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    (async () => {
      const user = await getClientSession()
      if (user) {
        setUser(user)
      }
      setTimeout(() => {
        setLoading(true)
      }, 1000)
    })()
  }, [router])

  const modifiedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      // @ts-ignore
      return React.cloneElement(child, { user : getUser, setUser: setUser });
    }
    return child;
  });

  const icon = {
    hidden: {
      pathLength: 1,
      fill: '#FFFFFF',
      border: '#FFFFFF'
    },
    visible: {
      pathLength: 1,
      fill: '#2563eb',
      border: '#FF0000'
    }
  }

  if (!isLoad) {
    return (
        <div className="flex justify-center items-center h-full bg-slate-900">
          <div className="flex-row justify-center items-center text-center">
            <svg width="527" height="223" viewBox="0 0 527 223" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                  d="M152 33.5L230 116.5L333 0L526.5 222.5L333 60.5V161.974L257 131L190.25 187L230 131L152 74.5L121.5 127L111.5 120.5L94.5 161L87 127L0 179.5L64 116.5H92L152 33.5Z"
                  variants={icon}
                  initial="hidden"
                  animate="visible"
              />
            </svg>
          </div>
        </div>
    )
  } else {
    return (
        <NextUIProvider className="w-full h-full text-foreground dark:bg-slate-900 ">
          <AnimatePresence mode="popLayout" initial={isLoad}>
            <motion.div
                initial={{y: -300, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: -300, opacity: 0}}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20
                }}
                key="transition"
            >
              <Navbar user={getUser} setUser={setUser} theme={theme} setTheme={setTheme}/>
            </motion.div>
            {modifiedChildren}
          </AnimatePresence>
        </NextUIProvider>

    )
  }
}

export default HomeLayout