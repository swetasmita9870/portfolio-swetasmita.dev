import React from 'react';
import { FaceBook, GitHubLogo, Gmail1, Instagram, LinkedIn, Whatsapp3d, Youtube } from '../lib/config';
import Link from 'next/link';
import LottieAnumation from './LottieAnumation';
import callingAnimation from '../public/Lottie/calling.json';

const DvFooter = () => {
  const footerIcons = [
    {
      name: "Facebook",
      logo: FaceBook,
      link: "https://www.facebook.com/swetasmitaranjan.sahoo/"
    },
    {
      name: "WhatsApp",
      logo: Whatsapp3d,
      link: "https://wa.me/+919337127197"
    },
    {
      name: "Instagram",
      logo: Instagram,
      link: "https://www.instagram.com/__swetasmita__ranjan__/",
    },
    {
      name: "Gmail",
      logo: Gmail1,
      link: "mailto:swetasmita987@gmail.com"
    },
    {
      name: "GitHub",
      logo: GitHubLogo,
      link: "https://github.com/swetasmita9870"
    },
    {
      name: "LinkedIn",
      logo: LinkedIn,
      link: "https://www.linkedin.com/in/swetasmita-ranjan-sahoo-55811a173/"
    },
  ];
  const menuList = [
    { title: 'Home', link: '/' },
    { title: 'Blog', link: '/blog' },
    { title: 'Project', link: '/project' },
    { title: 'Gallery', link: '/gallery' },
    { title: 'Reels', link: '/reel' },
    { title: 'Contact', link: '/contact' },
  ];
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Me</h2>
          <p>A passionate and self-motivated individual, enthusiastically keen to learn and explore.</p>
          <div className='social-icons-container justify-content-center justify-content-md-start'>
            {footerIcons.map((data, index) => (
              <a key={index} href={data.link} target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={data.logo} width={30} height={30} alt={`${data.name} Icon`} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <div className="menu-list d-flex flex-column">
            {menuList.map((data, i) => (
              <Link prefetch={true} href={data.link} key={i} className='text-left p-2 text-app'  >
                {data.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-section">
          <h2>Contact me</h2>
          <p>Chandigarh, India</p>
          <p>swetasmita987@gmail.com</p>
          <div className='d-flex mt-3 justify-content-center justify-content-md-start'>
            <LottieAnumation width={30} height={30} animationName={callingAnimation} />
            <p className='mb-0 mx-2 bold text-success mt-1'>+91-9337127197</p>
          </div>
        </div>
        <div className="footer-section">
          <h2>©Swetasmita</h2>
          <p>Embark on a journey through creativity and passion. 🚀 Visit my portfolio and witness the fusion of ideas, design, and dedication. 🎨 Let the pixels tell my story. Welcome to a world crafted with passion and purpose. 🌟</p>
        </div>
      </div>
      <style jsx>{`
        .footer-container {
          background: var(--l_profileCard_bgColor);
          color: var(--l_textColor);
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          text-align: center;
        }

        .footer-content {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .footer-section {
          flex-basis: 100%;
          margin-bottom: 20px;
        }

        .social-icons-container {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .social-icon {
          display: inline-block;
          cursor: pointer;
          transition: transform 0.3s ease-in-out;
        }

        .social-icon:hover {
          transform: scale(1.2);
        }

        @media (min-width: 576px) {
          .footer-section {
            flex-basis: calc(50% - 20px);
          }
        }

        @media (min-width: 768px) {
          .footer-section {
            flex-basis: calc(50% - 20px);
          }
        }

        @media (min-width: 992px) {
          .footer-section {
            flex-basis: calc(25% - 20px);
          }
        }

        @media (min-width: 1200px) {
          .footer-section {
            flex-basis: calc(25% - 20px);
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default DvFooter;
