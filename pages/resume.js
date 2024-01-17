import React from 'react'
import DvHeader from '../component/DvHeader'
import { Resume } from '../lib/config'

const resume = () => {
  return (
    <div>
      <DvHeader />
      <div className='vh-100'>
        <embed
          src={Resume}
          type="application/pdf"
          width="100%"
          height="100%"
        />     </div>
    </div>
  )
}

export default resume