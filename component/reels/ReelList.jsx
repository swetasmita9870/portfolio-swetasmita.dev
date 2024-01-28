import React, { useRef, useState } from 'react';

import { Keyboard, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Virtual } from "swiper";

import { useRouter } from 'next/router';
import { MuteProvider } from './MuteContext';
import { allReelsData } from '../../lib/reel';
import ReelsPlayer from './ReelsPlayer';
import { useIsMobileView } from '../../hook/mobileview';

const ReelsList = (props) => {
  const swipper_ref = useRef(null);
  const router = useRouter();
  const mobileView = useIsMobileView();
  const [activeIndex, setActiveIndex] = useState(0)
  const [currentSlideData, setCurrentSlideData] = useState(props.reelsInitialData)

  SwiperCore.use([Virtual]);
  const timeoutRef = useRef(null);

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      swipper_ref.current.slidePrev();
    } else if (e.key === 'ArrowDown') {
      swipper_ref.current.slideNext();
    }
  }
  React.useEffect(() => {
    router.push(`/reels/${allReelsData[0].postId}`, undefined, { shallow: true });
  }, [])


  const handleSlideChange = (e) => {
    const newIndex = e?.activeIndex !== undefined ? e.activeIndex : 0;
    setActiveIndex(newIndex);
    router.push(`/reels/${allReelsData[newIndex]?.postId}`, undefined, { shallow: true });
    setCurrentSlideData(allReelsData[newIndex])
  };



  return (
    <>
      <div className='dynamicHeightReels' >
        <MuteProvider>
          <div className='d-flex align-items-center justify-content-center h-100 position-relative' >
            <div id="reelsComment"></div>
            <Swiper
              modules={[Mousewheel, Keyboard, Virtual]}
              direction={'vertical'}
              slidesPerView={1}
              spaceBetween={mobileView ? 5 : 10}
              speed={!mobileView ? 2000 : 1000}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              touchStartPreventDefault={false}
              preventClicksPropagation={false}
              virtual
              onInit={(ev) => {
                swipper_ref.current = ev;
              }}
              onSlideChange={(e) => handleSlideChange(e)}
              onSwiperSlideChange={(event) => {
                handleSlideChange(event);
              }}
              ref={swipper_ref}
              style={{
                height: "100%",
                backgroundColor: "var(--l_profileCard_bgColor)",
                position: "relative",
                width: mobileView ? '100vw' : "335px",
                minWidth: mobileView ? '100vw' : "320px",
                overflow: "visible",
                marginTop: !mobileView && "15px"
              }}
              className="mySwiper"
            >
              {allReelsData?.map((list, index) => (
                <SwiperSlide key={list?.id}
                  id={list.id} data={list} virtualIndex={1}>
                  <ReelsPlayer
                    key={list.postId}
                    publicId={list.url}
                    poster={list?.thumbnail}
                    playerId={list.postId}
                    data={allReelsData?.[activeIndex]}
                    activeIndex={activeIndex}
                    currentSlideData={currentSlideData}
                    {...props}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </MuteProvider>
      </div>
      <style jsx>{`
      :global(#nprogress){
        display:none !important;
      }
      :global(.dynamicHeightReels){
        height:${mobileView ? 'calc(var(--vhCustom, 1vh) * 100)' : 'calc(var(--vhCustom, 1vh) * 88)'} !important;
        overflow: ${mobileView && 'hidden !important'};
      }
      :global(.swiper-wrapper){
        height:${mobileView ? 'calc(var(--vhCustom, 1vh) * 100)' : 'calc(var(--vhCustom, 1vh) * 88)'} !important;
      }
      :
      `}</style>
    </>
  );
};

export default ReelsList;
