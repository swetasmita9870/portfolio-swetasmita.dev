
import { useRouter } from 'next/router'
import React from 'react'
import { useIsMobileView } from '../hook/mobileview';
import { Profile } from '../lib/config';
import Image from 'next/image';
import Link from 'next/link';
import avartarAnimation from '../public/Lottie/avatar.json'
import LottieAnumation from './LottieAnumation';
const DvHeader = () => {
  const router = useRouter();
  const isMobile = useIsMobileView();
  const menuList = [
    { title: 'Home', link: '/' },
    { title: 'Blog', link: '/blog' },
    { title: 'Resume', link: '/resume' },
    { title: 'Gallery', link: '/gallery' },
    { title: 'Reels', link: '/reel' },
    { title: 'Contact', link: '/contact' },
  ]
  return (
    <div className='col-12 sticky-top d-flex justify-content-between align-item-center' style={{ height: "12vh", background: "var( --l_profileCard_bgColor)" }}>
      <div className='col-4 d-flex align-items-center'>
        <h1 className='primary-text'>SwetsSmita</h1>
      </div>
      {!isMobile && <div className='col-8 d-flex flex-row align-items-center justify-content-between'>
        <div className='col-6 d-flex justify-content-between align-items-center'>
          {menuList.map((data, i) => {
            return (
              <Link prefetch={true} href={data.link} key={i} className={`${router.pathname === data.link ? "text-base" : "text-app"}  text-decoration-none cursorPtr font-weight-500 list_none`} >{data.title}</Link>
            )
          })}
        </div>
        <div className='col-6 px-4 d-flex justify-content-end align-items-end'>
          <LottieAnumation width={80} height={80} animationName={avartarAnimation} />
        </div>
      </div>}

      <style jsx>{`
      .list_none{
        list-style-type:none;
        padding: 0 14px;
      }
      .list_none:hover{
        text-shadow: 5px 6px 8px black;
        color:var(--l_base) !important;
      }
      @keyframes shine {
        0% {
          background-position-x: -500%;
        }
        100% {
          background-position-x: 500%;
        }
      }
      .headingName {
        font-weight: 700;
        text-align: center;
        font-size: ${isMobile ? "18px" : "40px"};
        font-family: Hack, sans-serif;
        text-transform: uppercase;
        background: linear-gradient(90deg, #000, #fff, #000);
        letter-spacing: 5px;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background-repeat: no-repeat;
        background-size: 80%;
        animation: shine 3.5s linear infinite;
        position: relative;
      }
      `}</style>
    </div>
  )
}

export default DvHeader