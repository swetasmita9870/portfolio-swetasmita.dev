import { useRouter } from 'next/router'
import React from 'react'
import { crud, forkify, netlify, Profile } from '../lib/config';

const Project = () => {
  const router = useRouter();
  let projectData = [
    {
      name:"Forkify Recipe",
      image:forkify,
      url:"https://liku-swetasmita-food-order.netlify.app"
    },
    {
      name:"Crud Operation",
      image:crud,
      url:"https://swetasmita-storage-validation.netlify.app/"
    },
    {
      name:"imdb movie search",
      image:netlify,
      url:"https://swetasmita-netflix-movie-search-app.netlify.app/"
    }
  ]
  return (
    <>
      <div className='bg-dark'>
        <h2 className='text-center py-3 text-white'>My Projects</h2>
        <div className='skillstab'>
          {projectData.map((data,index)=>{
          return  <div key={index} className='bulk__message__card1' onClick={() => router.push(data.url)}>
            <div className='d-flex justify-content-center align-items-center pt-3'>
              <img className='imageDiv' src={data.image} />
            </div>
            <h3 className='text-left px-3 pt-3 text-white text-uppercase headingName'>{data.name}</h3>
          </div>
          })}
          
        </div>
        <style jsx>{`
   :global(.bulk__message__card1){
    background: linear-gradient(45deg, #023, transparent) #000;
    cursor:pointer;
    border-radius:22px;
   }
   .skillstab{
    display:flex;
    justify-content: center;
    gap:3rem;
    flex-wrap:wrap;
    width:100%;
  }
   .text-shadow{text-shadow: 5px 6px 8px black;}
   .bulk__message__card1:hover, .bulk__message__card1:focus {
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
  .imageDiv{
    width: 20rem;
    height: 10rem; 
    borderRadius: 10px;
  }
  @media only screen and (max-width: 767px) {
    /* CSS rules for phone devices */
    :global(.bulk__message__card1){
      background: linear-gradient(90deg, #023, transparent) #000;
      cursor:pointer;
      border-radius:22px;
      padding:1rem;
      width:75%;
     }
     .imageDiv{
      width: 10rem;
      height: 5rem; 
      borderRadius: 10px;
    }
  }
   `}</style>
      </div>
    </>
  )
}

export default Project