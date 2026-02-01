import React, { useRef } from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_03g1n65', 'template_yhgor1h', form.current, 'dpwihoa3p06dG_OqG')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message Sent!");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <div className='contact-top'>
        <h5>Get In Touch</h5>
      </div>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>saitejakavuri39@gmail.com</h5>
            <a href="mailto:saitejakavuri39@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7981103112</h5>
            <a href="https://wa.me/917981103112" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="email" name="email" placeholder='Your E-Mail' required/>
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
