import React from 'react'
import { Link } from "react-router-dom";


const HomeBottomText = () => {
  return (
    <div className='justify-center  gap-2 items-center flex font-[font500] text-white hover:border-green-300'>
      <div className='border-3 h-32 flex items-center px-10 border-white rounded-full uppercase hover:border-green-300 hover:text-green-300'>
        <Link className='text-[6vw] mt-3 ' to='/project'>Projects</Link>
      </div>
      <div className='border-3 h-32 flex items-center px-10 border-white rounded-full uppercase hover:border-green-300 hover:text-green-300'>
        <Link className='text-[6vw] mt-3 ' to='/Ages
        '>Agencess</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
