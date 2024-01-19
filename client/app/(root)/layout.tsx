'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getClientSession } from '@/functions/getClientSession/getClientSession'
import { NextUIProvider } from '@nextui-org/react'
import Navbar from '../components/NavBar'
import { AnimatePresence, motion } from 'framer-motion'

const HomeLayout = ({children}: { children: React.ReactNode }) => {
  const router = useRouter()
  const [getUser, setUser] = useState({} as any)
  const [isLoad, setLoading] = useState(false)

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

  function icon(color: string) {
  return {
    hidden: {
      pathLength: 1,
      fill: '#FFFFFF',
      border: '#FFFFFF'
    },
    visible: {
      pathLength: 1,
      fill: color,
      border: '#FF0000'
    }
  }
  }

  if (!isLoad) {
    return (
        <div className="flex justify-center items-center h-full">
          <div className="flex-row justify-center items-center text-center">
            <svg width="499" height="72" viewBox="0 0 499 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path variants={icon('#237ED2')} initial="hidden"  animate="visible" d="M0.0681818 71V1.18182H28.0227C33.1591 1.18182 37.4432 1.94318 40.875 3.46591C44.3068 4.98864 46.8864 7.10227 48.6136 9.80682C50.3409 12.4886 51.2045 15.5795 51.2045 19.0795C51.2045 21.8068 50.6591 24.2045 49.5682 26.2727C48.4773 28.3182 46.9773 30 45.0682 31.3182C43.1818 32.6136 41.0227 33.5341 38.5909 34.0795V34.7614C41.25 34.875 43.7386 35.625 46.0568 37.0114C48.3977 38.3977 50.2955 40.3409 51.75 42.8409C53.2045 45.3182 53.9318 48.2727 53.9318 51.7045C53.9318 55.4091 53.0114 58.7159 51.1705 61.625C49.3523 64.5114 46.6591 66.7955 43.0909 68.4773C39.5227 70.1591 35.125 71 29.8977 71H0.0681818ZM14.8295 58.9318H26.8636C30.9773 58.9318 33.9773 58.1477 35.8636 56.5795C37.75 54.9886 38.6932 52.875 38.6932 50.2386C38.6932 48.3068 38.2273 46.6023 37.2955 45.125C36.3636 43.6477 35.0341 42.4886 33.3068 41.6477C31.6023 40.8068 29.5682 40.3864 27.2045 40.3864H14.8295V58.9318ZM14.8295 30.3977H25.7727C27.7955 30.3977 29.5909 30.0455 31.1591 29.3409C32.75 28.6136 34 27.5909 34.9091 26.2727C35.8409 24.9545 36.3068 23.375 36.3068 21.5341C36.3068 19.0114 35.4091 16.9773 33.6136 15.4318C31.8409 13.8864 29.3182 13.1136 26.0455 13.1136H14.8295V30.3977Z" fill="#237ED2"/>
              <motion.path variants={icon('#EB3434')} initial="hidden" animate="visible" d="M151.696 36.0909C151.696 43.7045 150.253 50.1818 147.366 55.5227C144.503 60.8636 140.594 64.9432 135.639 67.7614C130.707 70.5568 125.162 71.9545 119.003 71.9545C112.798 71.9545 107.23 70.5455 102.298 67.7273C97.3665 64.9091 93.4688 60.8295 90.6051 55.4886C87.7415 50.1477 86.3097 43.6818 86.3097 36.0909C86.3097 28.4773 87.7415 22 90.6051 16.6591C93.4688 11.3182 97.3665 7.25 102.298 4.45455C107.23 1.63636 112.798 0.22727 119.003 0.22727C125.162 0.22727 130.707 1.63636 135.639 4.45455C140.594 7.25 144.503 11.3182 147.366 16.6591C150.253 22 151.696 28.4773 151.696 36.0909ZM136.73 36.0909C136.73 31.1591 135.991 27 134.514 23.6136C133.06 20.2273 131.003 17.6591 128.344 15.9091C125.685 14.1591 122.571 13.2841 119.003 13.2841C115.435 13.2841 112.321 14.1591 109.662 15.9091C107.003 17.6591 104.935 20.2273 103.457 23.6136C102.003 27 101.276 31.1591 101.276 36.0909C101.276 41.0227 102.003 45.1818 103.457 48.5682C104.935 51.9545 107.003 54.5227 109.662 56.2727C112.321 58.0227 115.435 58.8977 119.003 58.8977C122.571 58.8977 125.685 58.0227 128.344 56.2727C131.003 54.5227 133.06 51.9545 134.514 48.5682C135.991 45.1818 136.73 41.0227 136.73 36.0909Z" fill="#EB3434"/>
              <motion.path variants={icon('#F5BC28')} initial="hidden" animate="visible" d="M250.79 36.0909C250.79 43.7045 249.347 50.1818 246.46 55.5227C243.597 60.8636 239.688 64.9432 234.733 67.7614C229.801 70.5568 224.256 71.9545 218.097 71.9545C211.892 71.9545 206.324 70.5455 201.392 67.7273C196.46 64.9091 192.563 60.8295 189.699 55.4886C186.835 50.1477 185.403 43.6818 185.403 36.0909C185.403 28.4773 186.835 22 189.699 16.6591C192.563 11.3182 196.46 7.25 201.392 4.45455C206.324 1.63636 211.892 0.22727 218.097 0.22727C224.256 0.22727 229.801 1.63636 234.733 4.45455C239.688 7.25 243.597 11.3182 246.46 16.6591C249.347 22 250.79 28.4773 250.79 36.0909ZM235.824 36.0909C235.824 31.1591 235.085 27 233.608 23.6136C232.153 20.2273 230.097 17.6591 227.438 15.9091C224.778 14.1591 221.665 13.2841 218.097 13.2841C214.528 13.2841 211.415 14.1591 208.756 15.9091C206.097 17.6591 204.028 20.2273 202.551 23.6136C201.097 27 200.369 31.1591 200.369 36.0909C200.369 41.0227 201.097 45.1818 202.551 48.5682C204.028 51.9545 206.097 54.5227 208.756 56.2727C211.415 58.0227 214.528 58.8977 218.097 58.8977C221.665 58.8977 224.778 58.0227 227.438 56.2727C230.097 54.5227 232.153 51.9545 233.608 48.5682C235.085 45.1818 235.824 41.0227 235.824 36.0909Z" fill="#F5BC28"/>
              <motion.path variants={icon('#237ED2')} initial="hidden" animate="visible" d="M285.724 71V1.18182H313.679C318.815 1.18182 323.099 1.94318 326.531 3.46591C329.963 4.98864 332.543 7.10227 334.27 9.80682C335.997 12.4886 336.861 15.5795 336.861 19.0795C336.861 21.8068 336.315 24.2045 335.224 26.2727C334.134 28.3182 332.634 30 330.724 31.3182C328.838 32.6136 326.679 33.5341 324.247 34.0795V34.7614C326.906 34.875 329.395 35.625 331.713 37.0114C334.054 38.3977 335.952 40.3409 337.406 42.8409C338.861 45.3182 339.588 48.2727 339.588 51.7045C339.588 55.4091 338.668 58.7159 336.827 61.625C335.009 64.5114 332.315 66.7955 328.747 68.4773C325.179 70.1591 320.781 71 315.554 71H285.724ZM300.486 58.9318H312.52C316.634 58.9318 319.634 58.1477 321.52 56.5795C323.406 54.9886 324.349 52.875 324.349 50.2386C324.349 48.3068 323.884 46.6023 322.952 45.125C322.02 43.6477 320.69 42.4886 318.963 41.6477C317.259 40.8068 315.224 40.3864 312.861 40.3864H300.486V58.9318ZM300.486 30.3977H311.429C313.452 30.3977 315.247 30.0455 316.815 29.3409C318.406 28.6136 319.656 27.5909 320.565 26.2727C321.497 24.9545 321.963 23.375 321.963 21.5341C321.963 19.0114 321.065 16.9773 319.27 15.4318C317.497 13.8864 314.974 13.1136 311.702 13.1136H300.486V30.3977Z" fill="#237ED2"/>
              <motion.path variants={icon('#34A853')} initial="hidden" animate="visible" d="M373.193 71V1.18182H387.955V58.8295H417.886V71H373.193Z" fill="#34A853"/>
              <motion.path variants={icon('#EA4335')} initial="hidden" animate="visible"  d="M451.662 71V1.18182H498.707V13.3523H466.423V29.9886H496.287V42.1591H466.423V58.8295H498.844V71H451.662Z" fill="#EA4335"/>
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
              <Navbar user={getUser} setUser={setUser}/>
            </motion.div>
            {modifiedChildren}
          </AnimatePresence>
        </NextUIProvider>

    )
  }
}

export default HomeLayout