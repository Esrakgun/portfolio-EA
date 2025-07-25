import React from 'react'
import HeroText from './HeroText';
import HeroPic from './HeroPic';

const HeroMain = () => {
  return (
    <div class='pt-60 pb-16'>
     <div className='flex md:flex-row max-w-[1200px] mx-auto justify-between items-center relative px-4'>
     <HeroText />
     <HeroPic />
     </div>
    </div>
  )
}

export default HeroMain;
