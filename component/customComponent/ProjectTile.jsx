import React from 'react'
import { GitLogo, Preview } from '../../lib/config'
import Shoemore from './Shoemore';

const ProjectTile = (props) => {
  const { data } = props;
  return (
    <>
      <div className="card__Div">
        <div >
          <img src={data.image} width="100%" height="120px" style={{ objectFit: "fill", borderRadius: "20px 20px 0 0" }} />
        </div>
        <div className="card__descr-wrapper">
          <p className="card__title text-base text-capitalize">
            {data.name}
          </p>
          <Shoemore
            description={data.desc}
          />
          <div className="card__links">
            <div className='d-flex align-items-center'>
              <img src={Preview} className='image_div' />
              <a className="link" href={data.url}>Preview</a>
            </div>
            <div>
              <img src={GitLogo} className='image_div' />
              <a className="link" href={data.git}>Code</a>
            </div>
          </div>
        </div>
        <style jsx>{`
        .card__Div {
          width: 20rem;
          height: 100%;
          border-radius: 20px;
          background: var( --l_section_bg);
          box-shadow: -0px 9px 8px #00f0,
                      5px -3px 8px #000;
          display: flex;
          flex-direction: column;
          transition: .4s;
          position: relative;
        }
        .image_div{
          width: 25px;
          height: 25px;
        }
        .card__Div:hover {
          transform: scale(1.02);
          box-shadow: 0px 0px 10px 2px #5a5a5a;
        }
        
        .card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px 20px 0 0;
          background-color: blueviolet;
        }
        
        .card__descr-wrapper {
          padding: 15px;
          display: grid;
        }
        
        .card__title {
          text-align: center;
          margin-bottom: 15px;
          font-weight: 900;
          font-size: 16px;
        }
        
        .svg {
          width: 25px;
          height: 25px;
          transform: translateY(25%);
          color: #000;
        }
        
        .card__links {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          align-self: flex-end;
        }
        
        .card__links .link {
          color: #000;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
        }
        
        .card__links .link:hover {
          text-decoration: underline;
        }
        
        `}</style>
      </div>
    </>
  )
}

export default ProjectTile