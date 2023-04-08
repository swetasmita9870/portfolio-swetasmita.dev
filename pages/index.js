import React from 'react'
import DvHeader from '../component/DvHeader'
import DvHome from '../component/home'
import CustomHead from '../component/head'

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