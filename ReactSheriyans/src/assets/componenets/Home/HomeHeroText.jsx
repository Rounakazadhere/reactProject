import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font300] pt-7 text-center text-white'>
      <div className='uppercase text-[9.5vw] leading-[8vw] flex items-center justify-center pt-3'>L'étincelle</div>
      <div className='uppercase text-[9.5vw] leading-[8vw] flex items-start justify-center pt-3'>qui<div className='h-[10vw] w-[19vw] -mt-3 -mb-1 rounded-full overflow-hidden '><Video /></div> génère</div>
      <div className='uppercase text-[9.5vw] leading-[8vw] flex items-center justify-center pt-3'>la créativité</div>
    </div>
  )
}

export default HomeHeroText
