import React from "react";
import { Facebbok, GitHub, Gmail, Instagram, Whatsapp, Youtube } from "../lib/config";


export default function Footer() {
  let fotericons = [
    {
      name: "Facebook",
      logo: Facebbok
    },
    {
      name: "WhatsApp",
      logo: Whatsapp
    },
    {
      name: "InstaGram",
      logo: Instagram
    },
    {
      name: "Gmail",
      logo: Gmail
    },
    {
      name: "Youtube",
      logo: Youtube
    },
    {
      name: "GitHub",
      logo: GitHub
    },
  ]
  return (
    <div className={`bg-dark`}>
      <h2 className="text-center text-white">Contact Details</h2>
      <div className="rowx">
        <div className=" d-flex justify-content-center align-items-center py-4" style={{ gap: "3vh" }}>
          {
            fotericons.map((data) => {
              return <div className="d-flex  align-items-center">
                <div style={{ background: "#5e6a76", borderRadius: "50%", }} className="d-flex justify-content-center align-items-center socialMedia">
                  <img src={data.logo} className="logofoo" />
                </div>
              </div>

            })
          }
        </div>

      </div>
      <div className="col-12 d-flex align-items-center justify-content-center">
        <p className="text-white text-center textContainer">©Swetasmita Ranjan Sahoo 2023. All Rights Reserved.
Feel free to customize this text by replacing "Swetasmita Ranjan Sahoo" with your own name or company name, and updating the 2023 to the current year.</p>
      </div>
      <style jsx>{`
      .logofoo{
        height:4vh;
        width:4vh;
      }
      .socialMedia{
        height:3rem;
        width:3rem;
        background:black;
        border-radius:50%;
        box-shadow: 0px 5px 1px black;
        cursor:pointer;
      }
      .socialMedia:hover{
        transform: scale(1.1);
      }
      .textContainer{
        width:66.66%;
      }
      @media only screen and (max-width: 767px) {
        .socialMedia{
          height:2rem;
          width:2rem;
          background:black;
          border-radius:50%;
          box-shadow: 0px 5px 1px black;
        }
        .textContainer{
          width:86.66%;
        }
        .logofoo{
          height:2.5vh;
          width:2.5vh;
        }
      }
      `}</style>
    </div>
  );
}
