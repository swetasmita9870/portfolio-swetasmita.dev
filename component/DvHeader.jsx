
import { useRouter } from 'next/router'
import React from 'react'
import { useIsMobileView } from '../hook/mobileview';
import { Logo } from '../lib/config';

const DvHeader = () => {
  const router = useRouter();
  const isMobile = useIsMobileView();
  return (
    <div className='col-12 d-flex justify-content-between align-item-center' style={{ height: "12vh", background: "#000" }}>
      <div className='col-6 d-flex align-items-center'style={{marginLeft:"2rem"}}>
        {/* <img
          src={Logo}
          height={100}
          width={300}
          className='ml-5'
          style={{ objectFit: "contain" }}
          alt="logo"
        /> */}
        <h1 className='primary-text'>PortFolio</h1>
      </div>
      {!isMobile && <div className='d-flex justify-content-between float-right m-auto'>
        <li className='text-white  list_none'>Home</li>
        <li className='text-white list_none' onClick={() => router.push('/blog')} >Blog</li>
        <li className='text-white list_none'>Resume</li>
        <li className='text-white list_none'>Contact</li>
      </div>}
      <style jsx>{`
      .list_none{
        list-style-type:none;
        padding: 0 14px;
      }
      .list_none:hover{
        text-shadow: 5px 6px 8px black;
        color:yellow !important;
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