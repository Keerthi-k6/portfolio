import React from 'react';
import styles from './Contact.module.css'; // Import CSS module

const Contact = () => {
  return (
    <section className={styles['c-wrapper']} id='contact'>
      <div className={`${styles['c-container']} flexCenter paddings`}> 
        <div className={styles['orange-circle2']}></div> 
        <h1>Contact Me!</h1>
        <div className={`${styles['c-desc']} paddings`}> 
          You are welcome to contact me at any time. Whether you have an exciting idea to discuss or just want to connect, I will make every effort to respond to your email promptly!
        </div>
        <button className='button'>
          <a href='mailto:Keerthisree.k6@gmail.com' target='_blank'>Let's Connect</a>
        </button>
      </div>
    </section>
  );
}

export default Contact;
