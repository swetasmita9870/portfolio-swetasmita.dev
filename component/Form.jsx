import { Button, TextField } from '@material-ui/core'
import Head from 'next/head'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';


const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  let params = {
    name: name, email: email, message: message
  }
  const serviceID = "service_6fdsauv";
  const templateID = "template_chl78bb";
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6fdsauv', 'template_chl78bb', form.current, 'NpXRVt3xxy6dxQSIN')
      .then((result) => {
        console.log(result.text);
        toast.success(result.text)
      }, (error) => {
        toast.error(error.text);
      });
  };

  return (
    <>
      <h2 className='bg-dark text-white text-center m-0 py-5'>Lets Talk</h2>
      <div className='bg-dark pb-5'>
        <div className='d-flex flex-wrap flex-column justify-content-center align-items-center'>
          <div className='d-flex flex-wrap flex-column'>
            <form ref={form} onSubmit={sendEmail} className='d-flex flex-wrap flex-column'>
              <label className='text-white fntSz14 m-0'>Name<span className='text-danger'>*</span></label>
              <input type="text" name="user_name" placeholder='Enter Your Name' className='inputfield' />
              <label className='text-white fntSz14 m-0'>Email<span className='text-danger'>*</span></label>
              <input type="email" name="user_email" placeholder='Enter Your Email' className='inputfield' />
              <label className='text-white fntSz14 m-0'>Please Tell Me About Yourself and Your Project<span className='text-danger'>*</span></label>
              <textarea name="message" className='inputfield' placeholder='Enter Your Query' />
              <input type="submit" value="Send" className='btn_follow' />
            </form>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {/* Same as */}
            <ToastContainer />
          </div>

        </div>
        <style jsx>{`
        .inputfield{
          background:black;
          outline:none;
          width:30vw;
          color:white;
          border-radius:6px;
          box-shadow:none;
          margin-bottom:3vh;
          border:none;
        }
        @media only screen and (max-width: 767px) {
          .inputfield{
            width:90vw;
          }
        }
        `}</style>
      </div>
    </>
  )
}

export default Form