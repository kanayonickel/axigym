import React, { useRef } from 'react'
import './Join.css';
import emailjs from '@emailjs/browser'

const join = () => {
    // const form = useRef()
   
    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('service_vzludxo', 'template_0jl0llf', form.current, 'xhhDQ20tRESNibesf')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   };

  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className="stroke-text">READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span className="stroke-text">YOUR BODY</span>
                <span>WITH US</span>
            </div>
        </div>
        <div className="right-j">
            <form  className="email-container" >
                <input type="email" name="user_email" placeholder="Enter your email address" />
                <button className="btn btn-j">Join Us</button>
            </form>
        </div>
    </div>
  )
}

export default join