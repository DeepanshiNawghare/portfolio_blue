import React from 'react'
import './contact.css'
import { MdOutlineEmail, MdOutlineWhatsapp } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export default function Contact() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nz9cffe', 'template_aej5guf', form.current, 'JYW5llwyRgQjtoE43')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2> 
            <div className='container contact_cnt'>
                <div className='contact_options'>
                    <article className='contact_option'>
                        <MdOutlineEmail className='contact_option_icon' />
                        <h4>Email</h4>
                        <h5>dummy@gmail.com</h5>
                        <a href='mailto:dummy@gmail.com'>Send a messsage</a>
                    </article>
                    <article className='contact_option'>
                        <RiMessengerLine className='contact_option_icon'/>
                        <h4>Messenger</h4>
                        <h5>username</h5>
                        <a href='https://m.me/userid' target='_blank'>Send a messsage</a>
                    </article>
                    <article className='contact_option'>
                        <MdOutlineWhatsapp className='contact_option_icon'/>
                        <h4>Email</h4>
                        <h5>+918989517355</h5>
                        <a href='https://api.whatsapp.com/send?phone+918989517355' target='_blank'>Send a messsage</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
                    <div >
                    <button type='submit' className='btn_blue'>Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
