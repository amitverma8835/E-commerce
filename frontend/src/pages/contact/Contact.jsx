import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <form action="https://formspree.io/f/xnnnobdv" method='POST'>

        <input type="text"  placeholder='Enter Your Name' required/>

        <input type="email" name="email" id="email" placeholder='Enter Your Email' required/>

        <textarea name="message" id="" placeholder='message' required></textarea>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact
