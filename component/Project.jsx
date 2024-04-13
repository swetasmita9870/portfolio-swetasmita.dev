import React from 'react'
import { connectify, crud, forkify, netlify, ShoesStore } from '../lib/config';
import ProjectTile from './customComponent/ProjectTile';

const Project = (props) => {
  let projectData = [
    {
      name: "Connectify",
      image: connectify,
      url: "https://connectify-gilt.vercel.app/",
      git: "#",
      desc: "I have created a chat app using Firebase and Next.js. The app allows users to send and delete messages while also providing a search feature to find other users. It leverages the real-time database capabilities of Firebase to ensure seamless and instant messaging. The Next.js framework provides a smooth and efficient user experience."
    },
    {
      name: "Shoes Store",
      image: ShoesStore,
      url: "https://shoes-store-chi.vercel.app/",
      git: "#",
      desc: "Discover our sleek shoe store built with Next.js, Tailwind, and Strapi. Browse our extensive collection of stylish footwear for all ages. With secure Stripe integration, enjoy seamless and protected transactions. Explore our user-friendly interface, detailed product descriptions, and exceptional customer service. Step into fashion-forward footwear effortlessly."
    },
    {
      name: "Forkify Recipe",
      image: forkify,
      url: "https://liku-swetasmita-food-order.netlify.app",
      git: "#",
      desc: "It utilizes the Forkify API to provide users with a platform to search for recipes, save their favorite recipes, and create shopping lists."
    },
    {
      name:"Crud Operation",
      image:crud,
      url: "https://swetasmita-storage-validation.netlify.app/",
      git: "https://github.com/swetasmita9870/storage-validation-using-redux",
      desc: "The main objective of this project is to validate form data and store it in different storage options such as local storage, session storage, and cookie storage based on the user's selection."
    },
    {
      name:"imdb movie search",
      image:netlify,
      url: "https://swetasmita-netflix-movie-search-app.netlify.app/",
      git: "https://github.com/swetasmita9870/movie-Search-app-using-saga",
      desc: "The main objective of this project is to validate form data and store it in different storage options such as local storage, session storage, and cookie storage based on the user's selection."
    }
  ]
  return (
    <>
      <div className='card_bg'>
        {!props.fromPage ? <h2 className='text-center py-5 text-white'>My Projects</h2> : null}
        <div className={`skillstab ${props.fromPage ? "px-5 pt-4" : ""}`}>
          {projectData.map((data,index)=>{
            return (<ProjectTile
              key={index}
              data={data}
            />)
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
    .skillstab{

    }
  }
   `}</style>
      </div>
    </>
  )
}

export default Project