import React from 'react'
import Video from '../assets/componenets/Home/Video'
import HomeHeroText from '../assets/componenets/Home/HomeHeroText'
import HomeBottomText from '../assets/componenets/Home/HomeBottomText'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
            <Video />
      </div>
      <div className='h-screen w-screen relative flex flex-col'>
          <HomeHeroText/>
          <HomeBottomText/>
      </div>
    </div>
  )
}

export default Home
