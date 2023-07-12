import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
     <section className="c-wrapper">
      <div className="c-container flexCenter paddings">
      <div className="orange-circle2"/>
        <h1>Contact Me! </h1>
        <div className="c-desc paddings">
        You are welcome to contact me at any time. Whether you have an exciting idea to discuss or just want to connect, I will make every effort to respond to your email promptly!</div>
        <button className='button'>
          <a href='mailto:Keerthisree.k6@gmail.com' target='_blank'>Let's Connect</a>
        </button>

      </div>
     </section>
  )
}

export default Contact
