import React from 'react';
import Services from '../mock-data/services';

const HeroSection = () => {
  return (
        <>
    <div id='hero' className='flex items-center justify-center flex-col py-20'>
        <div className='text-center'>
            <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500'>
                Marziona restaurant
            </h1>
            <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ab? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, officia!
            </p>
        </div>
    </div>
    </>
  )
}

export default HeroSection;