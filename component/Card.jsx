import React, { useEffect, useState } from 'react'

const Card = (props) => {
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    // <div>
    //   hello world
    // </div>
    <>
      {/* <div className='bg-dark'> */}
      {/* <h2 className='m-0 text-center text-white'>Live Timer</h2> */}
      {/* <h1 className='m-0 text-center headingName py-5'>{`${date.toLocaleTimeString()}`}</h1> */}
      {/* </div> */}
      <div className='bg-dark d-flex flex-column justify-content-center align-items-center'>
        <h2 style={{ fontFamily: "sans-serif" }} className='bg_dark text-center primary-text pb-5'>About Me!</h2>
        <div className='d-flex align-items-center col-12 justify-content-center flex-wrap card_container'>
          <div className='bulk__message__card'>
            <h5 className='text-left px-3 pt-3 text-white text-shadow'>Experimental Results</h5>
            <li className='text-left  px-3  pt-3 text-white'>Designed and implemented front-end architecture for a new web application.</li>
            <li className='text-left  px-3  pt-3 text-white'>Created reusable components using React.js.</li>
          </div>
          <div className='bulk__message__card'>
            <h5 className='text-left px-3 pt-3 text-white text-shadow'>Creative</h5>
            <li className='text-left  px-3  pt-3 text-white'>Optimized components for performance.</li>
            <li className='text-left  px-3  pt-3 text-white'>Debugged front-end code.</li>          </div>
          <div className='bulk__message__card'>
            <h5 className='text-left px-3 pt-3 text-white text-shadow'>Experimental Results</h5>
            <li className='text-left  px-3  pt-3 text-white'>Worked with back-end developers to integrate front-end code with back.</li>
            <li className='text-left  px-3  pt-3 text-white'>Integrate New Features.</li>          </div>
        </div>
      </div>
      <style jsx>{`
     :global(.bulk__message__card){
      background: linear-gradient(90deg, #023, transparent) #000;
      cursor:pointer;
      border-radius:22px;
      padding:1rem;
      width:25%;
      height:30vh;
     }
     .card_container{
      gap:3rem;
     }
     .bulk__message__card:hover, .bulk__message__card:focus {
      background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
      transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
      color: #000;
    }
    .text-shadow{text-shadow: 5px 6px 8px black;}
    .headingName{
    color: black;
    text-shadow: 2px 2px 3px yellow, 2px 1px 5px yellow;
    animation: glow 5s linear infinite;
    }
    @keyframes glow {
      0% {
        filter: hue-rotate(0deg);
      }
      100% {
        filter: hue-rotate(360deg);
      }
    }
    @media only screen and (max-width: 767px) {
      /* CSS rules for phone devices */
      :global(.bulk__message__card){
        background: linear-gradient(90deg, #023, transparent) #000;
        cursor:pointer;
        border-radius:22px;
        padding:1rem;
        width:75%;
        height:40vh;
       }
    }
     `}</style>
    </>
  )
}

export default Card