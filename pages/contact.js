import React from 'react'
import { FaceBook, GitHubLogo, Gmail1, Home, Instagram1, LinkedIn, Phone, Whatsapp3d } from '../lib/config'
import ContactUsAnimation from '../public/Lottie/contactUs.json'
import Lottie from 'react-lottie';
import Form from '../component/Form';
import dynamic from 'next/dynamic';
const DvHeader = dynamic(() => import('../component/DvHeader'), { ssr: false });
const DvFooter = dynamic(() => import('../component/Footer'), { ssr: false });
const contact = (props) => {
  const contactList = [
    { title: "Chat", icon: Whatsapp3d, link: "https://wa.me/+919337127197", description: "Dm Me !!" },
    { title: "Email", icon: Gmail1, link: "mailto:swetasmita987@gmail.com", description: "swetasmita987@gmail.com" },
    { title: "Phone", icon: Phone, link: "tel:+919337127197", description: "+91-9337127197" },
    { title: "Git-Hub", icon: GitHubLogo, link: "https://github.com/swetasmita9870", description: "https://github.com/swetasmita9870" },
    { title: "LinkedIn", icon: LinkedIn, link: "https://www.linkedin.com/in/swetasmita-ranjan-sahoo-55811a173/", description: "https://www.linkedin.com/in/swetasmita-ranjan-sahoo-55811a173/" },
    { title: "Instagram", icon: Instagram1, link: "https://www.instagram.com/__swetasmita__ranjan__/", description: "__swetasmita__ranjan__" },
    { title: "Facebook", icon: FaceBook, link: "https://www.facebook.com/swetasmitaranjan.sahoo/", description: "swetasmitaranjan sahoo" },
    { title: "Address", icon: Home, link: "https://www.google.com/maps/place/Pingua,+Odisha+759016/@20.8153905,85.9462204,20.28z/data=!4m6!3m5!1s0x3a19479be7e65937:0x61fd7f86a11c9edb!8m2!3d20.8179589!4d85.9445064!16s%2Fm%2F0_vbkpt?entry=ttu", description: "Pingua ,DhenKanal ,Odisha ,759016" },
  ]
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ContactUsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <DvHeader {...props} />
      <div>
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
      <div className='d-flex col-12justify-content-center flex-wrap'>
        {contactList.map((data) => {
          return (
            <div className='col-6 col-md-4 d-flex align-items-center flex-column text-center'>
              <a href={data.link} target='_blank' className='px-3 d-flex align-items-center flex-column text-center text-decoration-none text-app'>
                <p className='fntSz23 bold mb-0'>{data.title}</p>
                <div className='d-flex align-items-center justify-content-center' style={{ width: "60px", height: "60px", borderRadius: "50%", background: "var(--l_base)" }}>
                  <img src={data.icon} width={40} height={40} alt="Swetasmita Ranjan Sahoo" />
                </div>
                <p className='fntSz17' style={{ wordBreak: "break-all" }}>{data.description}</p>
              </a>
            </div>
          )
        })}
      </div>
      <Form />
      <DvFooter />
    </div>
  )
}

export default contact