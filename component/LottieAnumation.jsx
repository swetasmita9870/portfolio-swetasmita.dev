import React from 'react'
import Lottie from 'react-lottie';

const LottieAnumation = ({ width = 300, height = 300, animationName = null }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationName,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div><Lottie options={defaultOptions} height={height} width={width} /></div>
  )
}

export default LottieAnumation