import React from 'react'
import { Bootstarp, Css, GitHub, Html, Javascript, materialui, nextJs, react, redux } from '../lib/config'
import Icon from './icon'

const Skills = () => {
  let skillsData = [{
    Name: "Html5",
    Logo: Html,
    id: "html",
    description: "HTML is the standard markup language for documents designed to be displayed in a browser"
  },
  {
    Name: "Css3",
    Logo: Css,
    id: "css",
    description: " CSS3 is used for the same thing as CSS, namely to style web pages and make them more attractive and user-friendly."
  }, {
    Name: "BootStrap",
    Logo: Bootstarp,
    id: "bootstrap",
    description: "Most popular CSS Framework for developing responsive and mobile-first websites"
  }, {
    Name: "Material Ui",
    Logo: materialui,
    id: "materialui",
    description: "An open-source project that features React components that implement Google's Material Design"
  }, {
    Name: "JavaScript",
    Logo: Javascript,
    id: "javascript",
    description: "JavaScript is a scripting language that enables you to create dynamically updating content."
  }, {
    Name: "React",
    Logo: react,
    id: "React",
    description: "JavaScript library for building user interfaces based on UI components"
  }, {
    Name: "Redux",
    Logo: redux,
    id: "Redux",
    description: "An open-source JavaScript library for managing and centralizing application state"
  }, {
    Name: "Next.Js",
    Logo: nextJs,
    id: "nextJs",
    description: "A React framework that gives you building blocks to create web applications"
  },
  {
    Name: "GitHub",
    Logo: GitHub,
    id: "GitHub",
    description: "Worked with Github, Bitbucket"
  }]
  return (
    <div className='col-12 card_bg pt-5 '>
      <h2 className='text-white text-center py-5'>My Skills</h2>
      <div className='d-flex flex-wrap justify-content-center'>
        {skillsData.map((data) => {
          return <div className='col-11 col-md-3 p-1 col-md-2 m-2 cover-pill d-flex flex-row align-items-center radius10'>
            <div className='col-4 col-md-4 px-0 d-flex flex-column'>
              <div className='d-flex align-item-center justify-content-center col-12 pt-4'>
                <img
                  src={`${data.Logo}`}
                  width={50}
                  height={50} alt="wallet_icon"
                />
              </div>
              <p className='text-center bold text-uppercase'>{data.Name}</p>
            </div>
            <div>
              <p>{data.description}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Skills