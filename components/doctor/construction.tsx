import Image from 'next/image'
import React from 'react'

const Construction = () => {
  return (
    <div className='flex flex-col w-full text-center items-center justify-center h-screen'>
        <Image src='/construction.svg' width={500} height={500} alt='construction' />
        <div>
            <h1 className='text-3xl font-bold text-primary'>Under Construction</h1>
            <p className='text-lg'>This page is under construction, check again later!</p>
        </div>
    </div>

  )
}

export default Construction
