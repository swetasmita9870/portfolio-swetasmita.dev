
import { useRouter } from 'next/router'
import React from 'react'

const DvHeader = () => {
  const router = useRouter();
  return (
    <div className='col-12 d-flex justify-content-between' style={{ height: "10vh", background: "#000" }}>
      <div>
        <h2 className='text-center pt-3 px-2 headingName'>SWETASMITA RANJAN SAHOO</h2>
      </div>
      <div className='d-flex justify-content-between px-5 pt-3'>
        <li className='text-white list_none'>Home</li>
        <li className='text-white list_none' onClick={() => router.push('/blog')} >Blog</li>
        <li className='text-white list_none'>Resume</li>
        <li className='text-white list_none'>contact</li>
      </div>
      <style jsx>{`
      .list_none{
        list-style-type:none;
        padding: 0 14px;
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
        font-size: 40px;
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