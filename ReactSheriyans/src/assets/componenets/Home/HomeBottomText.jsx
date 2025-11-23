import React from 'react'
import { Link } from "react-router-dom";


const HomeBottomText = () => {
  return (
    <div className='justify-center  gap-2 items-center flex font-[font500] text-white '>
      <Link className='text-[6.5vw] border-2  leading-[5vw] pt-5 px-10 uppercase border-white rounded-full pb-2'>Projects</Link>
      <Link className='text-[6.5vw] border-2  leading-[5vw] pt-5 px-10 uppercase border-white rounded-full pb-2'>Agencess</Link>
      
    </div>
  )
}

export default HomeBottomText
