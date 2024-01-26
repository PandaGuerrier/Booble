'use client'
import React from 'react'
import Hero from '@/app/components/Hero'
import Definition from '@/app/components/Definition'
import Presentation from '@/app/components/Presentation'
import FaqPart from '@/app/components/FaqPart'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
      <>
        <Hero />
        <div className={"top-[-50px] animate__animated animate__fadeInUp"}>
          <Definition />
        </div>
        <Presentation />
        <FaqPart />
        <Footer />
      </>
  )
}
