import { projects } from '@/data'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import { PinContainer } from './Pin'

const RecentProjects = () => {
  return (
    <div id='projects' className='py-20'>
          <h1 className="heading text-black">
              A small selection of {' '} 
              <span className="text-orange">recent projects</span>
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-x-24 gap-y-8 mt-10 p-4">
              {projects.map((item) => (
                  <div key={item.id} className="text-white sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex sm:w-[470px] w-[80vw] items-center justify-center">
                      <PinContainer title={item.link} href={item.link}>
                          <div className="relative flex items-center justify-center sm:w-[470px] sm:h-[40vh] h-[30vh] w-[80vw] overflow-hidden mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" 
                  alt="bgImage" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 rounded-md"
                />
                          </div>
                <h1 className="font-bold text-[#13162D] lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
                          </h1>
                          <p
                className="lg:text-sm lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#C0C0C0",
                  margin: "1vh 0",
                }}
              >
                {item.des}
                          </p>
                          <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-orange">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#f7c69f" />
                </div>
              </div>
                     </PinContainer>
                  </div>
              ))}
          </div>
    </div>
  )
}

export default RecentProjects
