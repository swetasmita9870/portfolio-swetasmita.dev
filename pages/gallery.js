import React, { useState } from 'react';
import { galletData } from '../lib/gallery';
import 'react-image-lightbox/style.css'; // Import the styles
import dynamic from 'next/dynamic';
const Lightbox = dynamic(() => import('react-image-lightbox'), { ssr: false });
const DvHeader = dynamic(() => import('../component/DvHeader'), { ssr: false });
const DvFooter = dynamic(() => import('../component/Footer'), { ssr: false });

const Gallery = (props) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentSlideData, setCurrentSlideData] = useState(galletData[0].url);

  const openLightbox = (index) => {
    setLightboxOpen(true);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (
    <>
      <DvHeader {...props} />
      <div className='col-12 d-flex gap-4 flex-wrap align-items-center justify-content-center'>
        {galletData.map((data, index) => (
          <div className='gallery-item' key={index} onClick={() => openLightbox(index)}>
            <img
              src={data.url}
              alt={`Image ${index + 1}`}
              className='gallery-image'
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
        {lightboxOpen && (
          <Lightbox
            mainSrc={galletData[lightboxIndex].url}
            nextSrc={galletData[(lightboxIndex + 1) % galletData.length].url}
            prevSrc={galletData[(lightboxIndex + galletData.length - 1) % galletData.length].url}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={() => setLightboxIndex((lightboxIndex + galletData.length - 1) % galletData.length)}
            onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % galletData.length)}
          />
        )}
        <style jsx>{`
  .gallery-item {
    height: 200px;
    width: 150px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    margin-bottom: 16px;
  }

  .gallery-item:hover {
    transform: scale(1.05);
  }

  .gallery-image {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  @media (min-width: 576px) {
    .gallery-item {
      flex-basis: calc(50% - 16px);
      max-width: calc(50% - 16px);
    }
  }

  @media (min-width: 768px) {
    .gallery-item {
      flex-basis: calc(50% - 16px);
      max-width: calc(50% - 16px);
    }
  }

  @media (min-width: 992px) {
    .gallery-item {
      flex-basis: calc(25% - 16px);
      max-width: calc(25% - 16px);
    }
  }

  @media (min-width: 1200px) {
    .gallery-item {
      flex-basis: calc(25% - 16px);
      max-width: calc(25% - 16px);
    }
  }
`}</style>


      </div>
      <DvFooter />
    </>
  );
};

export default Gallery;
