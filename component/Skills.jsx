import React from 'react'
import { Bootstarp, Css, GitHub, Html, Javascript, materialui, nextJs, react, redux } from '../lib/config'
import Icon from './icon'

const Skills = () => {
  let skillsData = [{
    Name: "Html5",
    Logo: Html,
    id: "html"
  },
  {
    Name: "Css3",
    Logo: Css,
    id: "css"
  }, {
    Name: "BootStrap",
    Logo: Bootstarp,
    id: "bootstrap"
  }, {
    Name: "Material Ui",
    Logo: materialui,
    id: "materialui"
  }, {
    Name: "JavaScript",
    Logo: Javascript,
    id: "javascript"
  }, {
    Name: "React",
    Logo: react,
    id: "React"
  }, {
    Name: "Redux",
    Logo: redux,
    id: "Redux"
  }, {
    Name: "Next.Js",
    Logo: nextJs,
    id: "nextJs"
  },
  {
    Name: "GitHub",
    Logo: GitHub,
    id: "GitHub"
  }]
  return (
    <div className='col-12 bg-dark pt-5'>
      <h2 className='text-white text-center py-5'>My Skills</h2>
      <div className='skillstab'>
        {skillsData.map((data) => {
          return <div className='position-relative'>
            <div className="skilBox align-items-center postition-absolute">
              <div className='d-flex align-item-center justify-content-center col-12 pt-4'>
                <img
                  src={`${data.Logo}`}
                  className="iconclass"
                  // unit="vw"
                  alt="wallet_icon"
                />
              </div>
              <h3 className='text-center primary-text'>{data.Name}</h3>
            </div>
          </div>
        })}
      </div>
      <style jsx>
        {`
        .skillstab{
          display:flex;
          justify-content: center;
          gap:3rem;
          flex-wrap:wrap;
          width:100%;
        }
        .iconclass{
          width:15vh;
          height:15vh;
        }
        .skilBox{
          height:30vh;
          width:30vh;
          background: radial-gradient(circle closest-side,#660066, transparent);
          border-radius: 50%;
          cursor:pointer;
        }
        .skilBox:hover{
          background: radial-gradient(circle closest-side, #ff1aff, transparent);
          transition: width .2s ease, height .2s ease;
        }
        .text-shadow{text-shadow: 5px 6px 8px black;}
        .skilBox{
          -webkit-animation: zoom 7s linear infinite;
            animation: zoom 1s linear infinite;
        }
        @keyframes zoom {  
          50%{
            transform: scale(.9);
          } 
        }
        .skilrotate{
          -webkit-animation-name: spin;
          -webkit-animation-duration: 400ms;
          -webkit-animation-iteration-count: infinite;
          -webkit-animation-timing-function: linear;
          -moz-animation-name: spin;
          -moz-animation-duration: 400ms;
          -moz-animation-iteration-count: infinite;
          -moz-animation-timing-function: linear;
          -ms-animation-name: spin;
          -ms-animation-duration: 400ms;
          -ms-animation-iteration-count: infinite;
          -ms-animation-timing-function: linear;
          -o-transition: rotate(3600deg);
        }
        @-moz-keyframes spin {
          from { -moz-transform: rotate(0deg); }
          to { -moz-transform: rotate(360deg); }
      }
      @-webkit-keyframes spin {
          from { -webkit-transform: rotate(0deg); }
          to { -webkit-transform: rotate(360deg); }
      }
      @keyframes spin {
          from {transform:rotate(0deg);}
          to {transform:rotate(360deg);}
      }
      @media only screen and (max-width: 767px) {
        /* CSS rules for phone devices */
        .skilBox{
          width:20vh;
          height:20vh;
        }
        .iconclass{
          width:10vh;
          height:10vh;
        }
      }
        `}
      </style>
    </div>
  )
}

export default Skills