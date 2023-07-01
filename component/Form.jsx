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
              <div className="form__group mb-3">
                <input type="text" onChange={(e) => setName(e.target.value)} name="user_name" placeholder='Enter Your Name*' className="form__field" />
                <label for="name" className="form__label"> Enter Your Name * </label>
              </div>
              <div className="form__group mb-3">
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="user_email" placeholder='Enter Your Email' className="form__field" />
                <label for="name" className="form__label"> Enter Your Email * </label>
              </div>
              <div className="form__group mb-3">
                <textarea rows={4} name="message" placeholder='Message' className="form__field" />
                <label for="name" className="form__label"> Message </label>
              </div>
              <div>
                <button className="button2" disabled={!name && !email}>
                  Send 👍
                </button>
              </div>
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
        button {
          position: relative;
          font-size: 1.2em;
          padding: 0.7em 1.4em;
          background-color: #BF0426;
          text-decoration: none;
          border: none;
          border-radius: 0.5em;
          color: #DEDEDE;
          box-shadow: 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.3);
        }
        
        button::before {
          position: absolute;
          content: '';
          height: 0;
          width: 0;
          top: 0;
          left: 0;
          background: linear-gradient(135deg, rgba(33,33,33,1) 0%, rgba(33,33,33,1) 50%, rgba(150,4,31,1) 50%, rgba(191,4,38,1) 60%);
          border-radius: 0 0 0.5em 0;
          box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);
          transition: 0.3s;
        }
        
        button:hover::before {
          width: 1.6em;
          height: 1.6em;
        }
        
        button:active {
          box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.3);
          transform: translate(0.1em, 0.1em);
        }
        .form__group {
          position: relative;
        }
        
        .form__field {
          border: 1px solid silver !important;
          border-radius: 5px;
          box-sizing: border-box;
          color: #fff;
          background-color: #212529;
          height: 40px;
          width:30vw;
          padding: 15px;
        }
        textarea{
          height:90px !important;
        }
        .form__field::placeholder {
          color: transparent;
        }
        
        .form__field:placeholder-shown ~ .form__label {
          top: 10px;
          border-right: none;
          border-left: none;
        }
        
        .form__label {
          background-color: none;
          color: #9b9b9b;
          display: block;
          font-size: .9em;
          margin-left: 10px;
          padding: 0 10px;
          pointer-events: none;
          position: absolute;
          top: -10px;
          transition: 0.2s;
        }
        
        .form__field:focus {
          border: 2px solid gold !important;
          background-color: #212529;
          outline: none;
        }
        
        .form__field:focus ~ .form__label {
          background-color: #212529;
          color: gold;
          font-size: .9em;
          margin-left: 10px;
          padding: 0 10px;
          position: absolute;
          top: -10px;
          transition: 0.2s;
        }
        @media only screen and (max-width: 767px) {
          .form__field{
            width:90vw;
          }
        }
        `}</style>
      </div>
    </>
  )
}

export default Form