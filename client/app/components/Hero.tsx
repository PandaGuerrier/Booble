import React from 'react'
import BlurBallComponent from '@/app/components/BlurBall'
import { Button, Link } from '@nextui-org/react'
import ModalLol from '@/app/components/ModalLol'

// @ts-ignore
export default function Hero() {
  return (
      <>
        <div>
          <BlurBallComponent className={'bg-[#247ED2] sm:top-[100px] sm:left-[100px] md:top-[200px] md:left-[700px]'}/>
          <BlurBallComponent className={'bg-[#34A855] md:top-[420px] md:left-[1100px]'}/>
          <BlurBallComponent className={'bg-[#D53D46] md:top-[520px] md:left-[800px]'}/>
        </div>

        <div className="flex justify-center items-center h-full w-full">
          <div className="text-center space-y-5">
            <h1 className="text-blue-600 text-lg tracking-widest space-y-3 text-gray-500">
              <ModalLol />
              <p className={"text-sm md:text-base"}>Le projet pour s'informer sur les bulles de filtres</p>
              <Link href={"#def"}>
                <Button color="primary" variant="solid" radius="full" className={'font-bold'}>
                  En savoir plus
                </Button>
              </Link>

            </h1>
          </div>
        </div>
      </>
  )
}