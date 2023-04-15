import React from 'react'
import Card from './Card'
import Dvhomecomp1 from './dvhomecomp1'
import Form from './Form'
import Project from './Project'
import Skills from './Skills'
import Footer from './Footer'

const DvHome = () => {
  return (
    <>
      <Dvhomecomp1 />
      <Card />
      <Skills />
      <Project />
      <Form />
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default DvHome