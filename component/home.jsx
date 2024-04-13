
import dynamic from 'next/dynamic'
const Card = dynamic(() => import('./Card'), { ssr: false });
const Dvhomecomp1 = dynamic(() => import('./dvhomecomp1'), { ssr: false });
const Form = dynamic(() => import('./Form'), { ssr: false });
const Project = dynamic(() => import('./Project'), { ssr: false });
const Skills = dynamic(() => import('./Skills'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });
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