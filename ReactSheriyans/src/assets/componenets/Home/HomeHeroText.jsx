import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font300] pt-7 text-center '>
      <div className='uppercase text-[9.5vw] leading-[8vw] flex items-center justify-center'>L'étincelle</div>
      <div className='uppercase text-[9.5vw] leading-[8vw] flex items-start justify-center'>qui<div className='h-[10vw] w-[19vw] -mt-3 -mb-1 rounded-full overflow-hidden'><Video /></div> génère</div>
      <div className='uppercase text-[9.5vw] leading-[8vw] flex items-center justify-center'>la créativité</div>
    </div>
  )
}

export default HomeHeroText
