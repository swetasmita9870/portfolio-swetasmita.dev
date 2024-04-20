import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LottieAnumation from './LottieAnumation';
import avartarAnimation from '../public/Lottie/avatar.json';
import { dark, light } from '../lib/config';

const MobileNavDrawer = ({ menuList, onClose, changeTheme, theme }) => {
  const router = useRouter();

  return (
    <div className="mobile-nav-drawer">
      <div className="close-icon text-app d-flex align-items-center justify-content-between" onClick={onClose}>
        <p>&#x2716;</p>
        <div
          onClick={changeTheme}
          className="align-self-center cursorPtr"
          style={{
            border: "2px solid var(--l_border)",
            borderRadius: "50%",
            height: "30px",
            width: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            width={15}
            height={15}
            src={theme !== "light" ? dark : light}
            style={{ borderRadius: "50%" }}
          />
        </div>

      </div>
      <div className="menu-list d-flex flex-column">
        {menuList.map((data, i) => (
          <Link prefetch={true} href={data.link} key={i} className={`${router.pathname === data.link ? "text-base borderBase" : "text-app border"} p-3 radius10 m-2 text-decoration-none cursorPtr font-weight-500 list_none`} >
            {data.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

const DvHeader = (props) => {
  const router = useRouter();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const menuList = [
    { title: 'Home', link: '/' },
    { title: 'Blog', link: '/blog' },
    { title: 'Project', link: '/project' },
    { title: 'Gallery', link: '/gallery' },
    { title: 'Reels', link: '/reels' },
    { title: 'Contact', link: '/contact' },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className='col-12 sticky-top d-flex justify-content-between align-item-center' style={{ height: "12vh", background: "var( --l_background_oversection)" }}>
      <div className='col-12 col-md-4 d-flex justify-content-between align-items-center'>
        <h1 className='text-base'>SwetaSmita</h1>
        <div className='d-flex d-md-none justify-content-end align-items-end'>
          <div className={`mobile-menu-icon d-md-none ${isDrawerOpen ? 'open' : ''}`} onClick={toggleDrawer}>
            <LottieAnumation width={80} height={80} animationName={avartarAnimation} />
          </div>
        </div>
      </div>
      <div className='col-8  d-none d-md-flex flex-row align-items-center justify-content-between'>
        <div className='col-6  d-none d-md-flex justify-content-between align-items-center'>
          {menuList.map((data, i) => (
            <Link prefetch={true} href={data.link} key={i} className={`${router.pathname === data.link ? "text-base" : "text-app"}  text-decoration-none cursorPtr font-weight-500 list_none`} >
              {data.title}
            </Link>
          ))}
        </div>
        <div className='col-6 d-none d-md-flex px-4 justify-content-end align-items-end'>
          <div
            onClick={props.changeTheme}
            className="align-self-center cursorPtr"
            style={{
              border: "2px solid var(--l_border)",
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img
              width={15}
              height={15}
              src={props.theme !== "light" ? dark : light}
              style={{ borderRadius: "50%" }}
            />
          </div>

          <LottieAnumation width={80} height={80} animationName={avartarAnimation} />
        </div>
      </div>
      {isDrawerOpen && (
        <MobileNavDrawer menuList={menuList} onClose={toggleDrawer} changeTheme={props.changeTheme} theme={props.theme} />
      )}
      <style jsx>{`
        .list_none{
          list-style-type:none;
          padding: 0 14px;
        }
        .list_none:hover{
          text-shadow: 5px 6px 8px black;
          color:var(--l_base) !important;
        }
        /* Add the mobile navigation drawer styles here */
        :global(.mobile-nav-drawer) {
          position: fixed;
          top: 0;
          right: 0;
          width: 80%;
          height: 100%;
          background: var(--l_background_oversection);
          padding: 20px;
          box-shadow: -1px 0 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          transform: translateX(${isDrawerOpen ? '0' : '100%'});
          transition: transform 0.3s ease-in-out;
        }
        :global(.mobile-nav-drawer.open ){
          transform: translateX(0);
        }

        :global(.mobile-menu-icon) {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default DvHeader;
