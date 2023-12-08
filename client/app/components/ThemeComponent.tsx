import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/button'
import { LightIcon } from '@/app/components/icons/LightIcon'
import { DarkIcon } from '@/app/components/icons/DarkIcon'

// @ts-ignore
export default function ThemeComponent({ theme, setTheme }) {

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
    }
  }

  return (
      <div>
        <Button isIconOnly onClick={toggleTheme} color={'primary'}>
          {theme === 'light' ? <DarkIcon /> : <LightIcon />}
        </Button>
      </div>
  )
}