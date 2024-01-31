import React from 'react'
import { Button, ButtonGroup } from '@nextui-org/react'
import ModalEnzolol from '@/app/components/ModalEnzolol'

// @ts-ignore
export default function Definition() {

  const onClick = (url: string) => {
    window.open(url, '_blank')
  }
  return (
      <>
        <div className="flex justify-center items-center h-full w-full">
          <div className={'blur-[15px] absolute bg-white -z-10'}>
            <h1 className={'text-[50px] md:text-[180px] tracking-widest select-none'}>D É F I N I T I O N</h1>
          </div>
          <div className={'bg-white/50 p-5 h-full md:h-[500px] border border-transparent border-y-gray-400 content-center items-center '}>
            <div className="flex h-full z-0 text-left place-items-center w-full">
              <div className={'md:flex h-full w-full space-y-5 md:space-y-0 md:space-x-20  items-center justify-center'}>
                <div className={""}>
                  <div className={"flex w-full justify-center"}>
                    <ModalEnzolol />
                  </div>

                  <h1 className={'flex justify-center text-gray-500 text-lg font-bold'}>Eli Pariser</h1>
                  <div className={'flex space-x-5 justify-center'}>
                    <ButtonGroup>
                      <Button onClick={() => onClick('https://twitter.com/elipariser')} isIconOnly variant={'shadow'}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
                             viewBox="0 0 50 50">
                          <path
                              d="M 34.199219 5.5996094 C 28.256009 5.5996094 23.400391 10.457181 23.400391 16.400391 C 23.400391 16.785135 23.429781 17.149605 23.472656 17.509766 C 16.141762 16.814224 9.5591993 13.067494 5.0683594 7.6601562 A 1.0001 1.0001 0 0 0 4.2773438 7.3007812 A 1.0001 1.0001 0 0 0 3.4316406 7.8046875 C 2.5476787 9.351621 2 11.214034 2 13.199219 C 2 15.562405 2.8180434 17.715053 4.1230469 19.511719 C 3.8757846 19.410652 3.5889897 19.425349 3.3476562 19.304688 A 1.0001 1.0001 0 0 0 1.9003906 20.199219 L 1.9003906 20.300781 C 1.9003906 24.001469 3.807742 27.155702 6.6152344 29.128906 C 6.5637034 29.120706 6.5153064 29.121711 6.4648438 29.113281 A 1.0001 1.0001 0 0 0 5.3515625 30.416016 C 6.5123023 33.898235 9.3526931 36.662552 12.925781 37.576172 C 10.11331 39.223372 6.8834712 40.199219 3.4003906 40.199219 C 2.6003906 40.199219 1.8365929 40.194315 1.2421875 40.109375 A 1.0001 1.0001 0 0 0 0.5625 41.943359 C 5.1122086 44.838628 10.408743 46.5 16.199219 46.5 C 25.525462 46.5 32.830248 42.60559 37.738281 37.037109 C 42.646315 31.468628 45.199219 24.253846 45.199219 17.5 L 45.199219 16.652344 C 47.010105 15.254487 48.661337 13.60786 49.9375 11.644531 A 1.0001 1.0001 0 0 0 48.693359 10.185547 C 48.165362 10.420212 47.55475 10.474381 47.005859 10.658203 C 47.7011 9.7200127 48.301383 8.7065336 48.652344 7.6035156 A 1.0001 1.0001 0 0 0 47.199219 6.4355469 C 45.499905 7.41936 43.612969 8.1303268 41.558594 8.6132812 C 39.607275 6.8020984 37.038549 5.5996094 34.199219 5.5996094 z M 34.199219 7.5996094 C 36.713504 7.5996094 39.059904 8.6850853 40.673828 10.388672 A 1.0001 1.0001 0 0 0 41.613281 10.677734 C 42.934626 10.390485 44.182854 9.9844613 45.384766 9.5039062 C 44.688934 10.433412 43.854953 11.259684 42.884766 11.841797 A 1.0001 1.0001 0 0 0 43.548828 13.689453 C 44.53531 13.541481 45.439415 13.146528 46.388672 12.890625 C 45.537378 13.803338 44.61667 14.650874 43.607422 15.394531 A 1.0001 1.0001 0 0 0 43.199219 16.199219 L 43.199219 17.5 C 43.199219 23.746154 40.805248 30.531372 36.238281 35.712891 C 31.671315 40.89441 24.972976 44.5 16.199219 44.5 C 12.14649 44.5 8.3797763 43.635083 4.9570312 42.064453 C 9.1716125 41.741689 13.039926 40.216826 16.207031 37.794922 A 1.0004308 1.0004308 0 0 0 16.302734 36.287109 A 1.0001 1.0001 0 0 0 15.5 35.900391 C 12.240871 35.900391 9.5097656 33.985527 8.0117188 31.28125 C 8.0766008 31.28295 8.1346327 31.300781 8.1992188 31.300781 C 9.1732927 31.300781 10.147857 31.194481 11.042969 30.970703 A 1.0001 1.0001 0 0 0 11.017578 29.023438 C 7.4284817 28.225862 4.7618144 25.363329 4.1542969 21.738281 C 5.1792732 22.075097 6.2324618 22.329347 7.3378906 22.398438 A 1.0001 1.0001 0 0 0 7.9550781 20.568359 C 5.5205757 18.945358 4 16.265885 4 13.199219 C 4 12.071965 4.2776547 11.025922 4.6542969 10.044922 C 9.688803 15.495995 16.707779 19.212301 24.550781 19.599609 A 1.0002161 1.0002161 0 0 0 24.650391 19.599609 A 1.0002908 1.0002908 0 0 0 24.652344 19.599609 A 1.0002908 1.0002908 0 0 0 25.662109 18.326172 C 25.486299 17.710834 25.400391 17.117057 25.400391 16.400391 C 25.400391 11.543601 29.342429 7.5996094 34.199219 7.5996094 z"></path>
                        </svg>
                      </Button>
                        <Button isIconOnly variant={'shadow'} onClick={() => onClick('https://fr.wikipedia.org/wiki/Eli_Pariser')}>
                          <svg viewBox="0 0 640 512" fill="currentColor" height="24" width="24">
                            <path
                                d="M640 51.2l-.3 12.2c-28.1.8-45 15.8-55.8 40.3-25 57.8-103.3 240-155.3 358.6H415l-81.9-193.1c-32.5 63.6-68.3 130-99.2 193.1-.3.3-15 0-15-.3C172 352.3 122.8 243.4 75.8 133.4 64.4 106.7 26.4 63.4.2 63.7c0-3.1-.3-10-.3-14.2h161.9v13.9c-19.2 1.1-52.8 13.3-43.3 34.2 21.9 49.7 103.6 240.3 125.6 288.6 15-29.7 57.8-109.2 75.3-142.8-13.9-28.3-58.6-133.9-72.8-160-9.7-17.8-36.1-19.4-55.8-19.7V49.8l142.5.3v13.1c-19.4.6-38.1 7.8-29.4 26.1 18.9 40 30.6 68.1 48.1 104.7 5.6-10.8 34.7-69.4 48.1-100.8 8.9-20.6-3.9-28.6-38.6-29.4.3-3.6 0-10.3.3-13.6 44.4-.3 111.1-.3 123.1-.6v13.6c-22.5.8-45.8 12.8-58.1 31.7l-59.2 122.8c6.4 16.1 63.3 142.8 69.2 156.7L559.2 91.8c-8.6-23.1-36.4-28.1-47.2-28.3V49.6l127.8 1.1.2.5z"/>
                          </svg>
                        </Button>
                      <Button isIconOnly variant={'shadow'} onClick={() => onClick('https://www.elipariser.org/')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round"
                                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
                        </svg>

                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
                <div className={'space-y-2 md:space-y-4 w-full md:w-2/3 text-xs md:text-lg'}>
                  <h1 className="text-gray-500">
                    La bulle de filtre est un concept développé par <a
                      href={'https://fr.wikipedia.org/wiki/Eli_Pariser'} target={'_blank'} className={'text-blue-600'}>Eli
                    Pariser</a>. Elle désigne un phénomène selon lequel les algorithmes des sites web personnalisent de
                    plus en plus l'information en ligne basée sur les préférences et les habitudes de l'utilisateur,
                    limitant ainsi l'exposition à des perspectives diverses et à des contenus contradictoires.
                  </h1>
                  <h1 className="text-gray-500">
                    Ce phénomène peut créer un isolement informationnel où l'utilisateur est "enfermé" dans une bulle de
                    contenu qui renforce ses opinions et croyances existantes. Eli Pariser, un auteur et activiste
                    américain, a popularisé ce terme dans son livre "The Filter Bubble: What the Internet Is Hiding from
                    You" paru en 2011.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}