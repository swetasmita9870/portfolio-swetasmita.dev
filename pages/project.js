import React from 'react'
import dynamic from 'next/dynamic';
const DvHeader = dynamic(() => import('../component/DvHeader'), { ssr: false });
const DvFooter = dynamic(() => import('../component/Footer'), { ssr: false });
const Project = dynamic(() => import('../component/Project'), { ssr: false });
const project
  = (props) => {
    return (
      <div>
        <DvHeader {...props} />
        <Project fromPage />
        <DvFooter />
      </div>
    )
  }

export default project