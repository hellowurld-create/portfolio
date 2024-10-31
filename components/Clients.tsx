import { companies, testimonials } from '@/data'
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteCards'

const Clients = () => {
  return (
    <div id='testimonials' className='py-20' >
          <h1 className="heading text-black-100">
              Kind words from {' '} 
              <span className="text-orange">satisfied clients</span>
          </h1>
      <div className="flex flex-col items-center max-lg:mt-20">
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
        
      </div>
    </div>
  )
}

export default Clients
