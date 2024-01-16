import React from 'react'
import Lottie from 'react-lottie';
import error404 from '../public/Lottie/error404.json'
const error = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: error404,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className='vh-100 w-100 d-flex flex-column align-items-center justify-content-center'>
      <Lottie options={defaultOptions} height={400} width={800} />
      <a href='/' className='fntSz20'>Back To home</a>
    </div>)
}

export default error