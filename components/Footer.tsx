import { socialMedia } from '@/data'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'

const Footer = () => {
  return (
    <footer id='contact' className='w-full mb-[100px] md:mb-5 pb-10'>
          <div className="w-full absolute left-0 -bottom-72 min-h-96">
              <img src="/footer-grid.svg" alt="grid" className='w-full opacity-80 h-full'/>
          </div>
          <div className="flex flex-col items-center">
              <h1 className="heading text-black lg:max-w-[45vw]">
                  Ready to take <span className='text-orange'>your</span> digital presence to the next level?
              </h1>
              <p className='text-white-100 my-5 text-center md:mt-10'>Reach out to me today and let&apos;s discuss how i can help you achieve your goals.</p>
              <a href="mailto:akpagodswill2@outlook.com">
                  <MagicButton
                      title="Let's get in touch"
                      icon={<FaLocationArrow />}
                      position='right'
                  /> 
                </a>
          </div>
          <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
              <p className="md:text-base text-sm sm:mb-6 md:font-normal text-black-100 font-light">Copyright © 2024 God&apos;swill</p>

             <div className="flex items-center md:gap3 gap-6">
            {socialMedia.map((profile) => (
                <a 
                key={profile.id} 
                href={profile.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 cursor-pointer flex justify-center backdrop-filter backdrop-blur-lg bg-opacity-75 rounded-lg border border-black-300 bg-black-200 saturate-100 items-center"
                >
                <img src={profile.img} alt={`Social icon ${profile.id}`} width={20} height={20} />
                </a>
            ))}
            </div>
          </div>

          
    </footer>
  )
}

export default Footer
