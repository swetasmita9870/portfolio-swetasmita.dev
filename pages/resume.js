import React from 'react'
import DvHeader from '../component/DvHeader'
import { Resume } from '../lib/config'

const resume = () => {
  return (
    <div>
      <DvHeader />
      <div className='vh-100'>
        <object width="100%" height="100%" data={Resume} type="application/pdf">   </object>
      </div>
    </div>
  )
}

export default resume