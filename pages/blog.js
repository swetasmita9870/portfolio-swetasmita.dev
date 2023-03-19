import React from 'react'
import Slider from "react-slick";
import DvHeader from './component/DvHeader'
import { SIGNUP_BANNER_CREATOR_1, SIGNUP_BANNER_CREATOR_2, SIGNUP_BANNER_CREATOR_3 } from './config'

const Blog = () => {
  const signImageList = [
    { id: 1, webImage: SIGNUP_BANNER_CREATOR_1 },
    { id: 2, webImage: SIGNUP_BANNER_CREATOR_2 },
    { id: 3, webImage: SIGNUP_BANNER_CREATOR_3 },
  ]
  const settings = {
    dots: true,
    className: "w-100 h-100",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false
  };
  return (
    <>
      <DvHeader />
      <div>
        <div className="p-0 d-flex reg__left__sec " style={{ height: "80vh" }}>
          <Slider {...settings}>
            {signImageList?.map((img) => (
              <div className="cursorPtr w-100  " key={img._id}>
                <img
                  src={img?.webImage}
                  alt="desktop login image"
                  className="w-100 wrap position-relative"
                  style={{ objectFit: "fill" }}
                />
                <p style={{ zIndex: "999", position: "absolute", top: "30", color: "#fff" }}>hiii</p>
              </div>
            ))}
          </Slider>
        </div>
        <style jsx>{`
        :global(.slick-dots){
          font-family: 'slick';
          font-size: 10px;
          line-height: 20px;
          position: absolute;
          top: 40px;
          right: 40px;
          width: 100px;
          height: 49px;
          content: '•';
          text-align: center;
          color: #fff;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
      }
      :global(.slick-dots li.slick-active button:before) {
        opacity: 1;
        color: #fff;
        font-size:9px
      }
      :global(.slick-dots li button:before){
        opacity: 0.5;
        color:var(--l_light_grey);
      }
      `}</style>
      </div>
    </>
  )
}

export default Blog