import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
          <div className="">
              <Spotlight fill='white' className='-top-40 md:-left-32 md:-top-20 -left-10 h-screen'/>
              <Spotlight fill='orange' className='top-10 left-full h-[80vh] w-[50vw]'/>
              <Spotlight fill='orange' className='top-28 left-80 h-[80vh] w-[50vw]' />
          </div>

          <div className="h-screen w-full  bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
    </div>
          <div className="flex justify-center relative my-20 z-10">
              <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                  <h2 className='uppercase text-xs text-center tracking-widest text-orange  max-w-80'>
                  Turning complex problems into simple, elegant web solutions.
                  </h2>
                  <TextGenerateEffect className="text-center text-black-200 text-[40px] md:text-5xl lg:text-6xl" words='Transforming Concepts into Seamless User Experiences' />
                  
                  <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl font-light text-black-100">
                      Hi, I’m God&apos;swill Akpa Ishie, a passionate software developer with expertise in React, Next.js, Node, and more.
                  </p>

                  <a href="#about">
                      <MagicButton
                          title='Show My Work' 
                          icon={<FaLocationArrow/>}
                          position='right'/>
                  </a>
              </div>
      </div>
      </div>
  )
}

export default Hero
