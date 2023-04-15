import React from 'react'
import { Profile } from '../lib/config'

const Dvhomecomp1 = () => {
  return (
    <div className='col-12 d-flex' style={{ height: "80vh" }}>
      <div className='col-6 bg-dark d-flex justify-content-center align-items-center' >
        <div className=' flex-column container'>
          <h1 className='text-shadow'>Hello 👋 I'm</h1>
          <section className="animation">
            <div className="first"><div className='text-shadow text-center'>Swetasmita Ranjan Sahoo 😎</div></div>
            <div className="second"><div className='text-shadow text-center'>Frontend Developer 🧑‍💻</div></div>
            <div className="third"><div className='text-shadow text-center'>Web Developer ✡️</div></div>
          </section>
        </div>
      </div>

      <div className='col-6 bg-dark d-flex justify-content-center align-items-center position-relative'>
        <img className='home-img-inner' width={"50%"} src={Profile} />
      </div>
      <style jsx>{`
      .text-shadow{
        text-shadow: 5px 6px 8px black;
        font-weight:bold;
      }
      .container {
        color: #e5e5e5;
        font-size: 2.26rem;
        text-transform: uppercase;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .animation {
        height:90px;
        overflow:hidden;
        margin-left: 1rem;
      }
      
      .animation > div > div {
        padding: 0.25rem 0.75rem;
        height:3.81rem;
        margin-bottom: 2.81rem;
        display:inline-block;
      }
      
      .animation div:first-child {
        animation: text-animation 8s infinite;
      }
      
      .first div {
        background-color:red;
      }
      .second div {
        background-color: yellow;
      }
      .third div {
        background-color: blue;
      }
      
      @keyframes text-animation {
        0% {margin-top: 0;}
        10% {margin-top: 0;}
        20% {margin-top: -5.62rem;}
        30% {margin-top: -5.62rem;}
        40% {margin-top: -11.24rem;}
        60% {margin-top: -11.24rem;}
        70% {margin-top: -5.62rem;}
        80% {margin-top: -5.62rem;}
        90% {margin-top: 0;}
        100% {margin-top: 0;}
      }
      `}</style>
    </div>
  )
}

export default Dvhomecomp1