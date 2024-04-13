import React from 'react'
import CustomHead from '../component/head'
import dynamic from 'next/dynamic';
const DvHeader = dynamic(() => import('../component/DvHeader'), { ssr: false });
const DvHome = dynamic(() => import('../component/home'), { ssr: false });
const Home = () => {
  return (
    <>
      <CustomHead />
      <div className='w-100'>
      <DvHeader />
      <DvHome />
      </div>
    </>
  )
}

export default Home