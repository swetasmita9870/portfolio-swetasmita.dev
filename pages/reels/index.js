import React from 'react'
import ReelsList from '../../component/reels/ReelList'
import DvHeader from '../../component/DvHeader'
import { useIsMobileView } from '../../hook/mobileview';

const reels = (props) => {
  const mobileView = useIsMobileView();
  return (
    <div className='overflow-hidden'>
      {!mobileView ? <DvHeader {...props} /> : ""}
      <ReelsList />
    </div>
  )
}

export default reels