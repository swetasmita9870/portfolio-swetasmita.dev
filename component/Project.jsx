import { useRouter } from 'next/router'
import React from 'react'
import { crud, forkify, netlify, Profile } from '../lib/config';

const Project = () => {
  const router = useRouter();
  return (
    <>
      <div className='bg-dark'>
        <h2 className='text-center py-3 text-white'>My Projects</h2>
        <div className='d-flex align-items-center w-100 justify-content-around'>
          <div className='col-3 bulk__message__card' style={{ height: "68vh" }} onClick={() => router.push('https://liku-swetasmita-food-order.netlify.app')}>
            <div className='d-flex justify-content-center align-items-center pt-3'>
              <img style={{ width: "40vh", height: "20vh", borderRadius: "10px" }} src={forkify} />
            </div>
            <h3 className='text-left px-3 pt-3 text-white text-uppercase headingName'>Forkify Recipe</h3>
            <p className='text-left  px-3  pt-3 text-white overflow-hidden'>A delicious journey through food. This vanilla JavaScript application explores the world of recipe food data, interacting with the Forkify API to fetch and display....</p>
            <div className='d-flex align-items-center m-auto col-12 px-2'>
              <img src={Profile} style={{ width: "7vh", height: "7vh", borderRadius: "50%" }} />
              <h5 className='text-white pl-3 text-shadow'>Swetasmita Ranjan Sahoo</h5>
            </div>
          </div>
          <div className='col-3  bulk__message__card ' style={{ height: "68vh" }} onClick={() => router.push('https://swetasmita-storage-validation.netlify.app/')}>
            <div className='d-flex justify-content-center align-items-center pt-3'>
              <img style={{ width: "40vh", height: "20vh", borderRadius: "10px" }} src={crud} />
            </div>
            <h3 className='text-left px-3 pt-3 text-white text-uppercase headingName'>Crud Operation</h3>
            <p className='text-left  px-3  pt-3 text-white'>Within computer programming, the acronym CRUD stands for create, read, update, and delete. These are the four basic functions of persistent storage.</p>
            <div className='d-flex align-items-center m-auto col-12 px-2'>
              <img src={Profile} style={{ width: "7vh", height: "7vh", borderRadius: "50%" }} />
              <h5 className='text-white pl-3 text-shadow'>Swetasmita Ranjan Sahoo</h5>
            </div>
          </div>
          <div className='col-3  bulk__message__card' style={{ height: "68vh" }} onClick={() => router.push('https://swetasmita-netflix-movie-search-app.netlify.app/')}>
            <div className='d-flex justify-content-center align-items-center pt-3'>
              <img style={{ width: "40vh", height: "20vh", borderRadius: "10px" }} src={netlify} />
            </div>
            <h3 className='text-left px-3 pt-3 text-white text-uppercase headingName'>imdb movie search</h3>
            <p className='text-left  px-3  pt-3 text-white'>IMDb is the world's most popular and authoritative source for movie, TV, and celebrity information. Watch trailers, get showtimes, and ......</p>
            <div className='d-flex align-items-center m-auto col-12 px-2'>
              <img src={Profile} style={{ width: "7vh", height: "7vh", borderRadius: "50%" }} />
              <h5 className='text-white pl-3 text-shadow'>Swetasmita Ranjan Sahoo</h5>
            </div>
          </div>
        </div>
        <style jsx>{`
   :global(.bulk__message__card){
    background: linear-gradient(45deg, #023, transparent) #000;
    cursor:pointer;
    border-radius:22px;
   }
   .text-shadow{text-shadow: 5px 6px 8px black;}
   .bulk__message__card:hover, .bulk__message__card:focus {
    background-color:#e91 ;
    color: #000;
  }
  @keyframes shine {
    0% {
      background-position-x: -500%;
    }
    100% {
      background-position-x: 500%;
    }
  }
  .headingName{
    font-weight: 700;
    text-align: center;
    font-size: 30px;
    font-family: Hack, sans-serif;
    text-transform: uppercase;
    background: linear-gradient(90deg, #000, #fff, #000);
    letter-spacing: 5px;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-repeat: no-repeat;
    background-size: 80%;
    animation: shine 8s linear infinite;
    position: relative;
  }
   `}</style>
      </div>
    </>
  )
}

export default Project