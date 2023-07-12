import React from 'react'
import pfp from '../../assets/pfp.jpg'
import './Hero.css'
import { FaGithub, FaLinkedin ,FaInstagram} from "react-icons/fa6";
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <>
    <div className="social-container">
    <div className="icon-wrapper">
        <div><a href='https://github.com/Keerthi-k6' target='_blank' className='icon'><FaGithub/></a></div>
        <div><a href='https://www.linkedin.com/in/keerthi-sree-konkimalla' target='_blank' className='icon'><FaLinkedin/></a></div>
        <div><a href='https://instagram.com/keerthi_sree_konkimalla_?igshid=ZDc4ODBmNjlmNQ==' target='_blank' className='icon'><FaInstagram/></a></div>
        
    </div>
    </div>
    <section className="hero-wrapper">
        <div className="innerwidth paddings flexCenter hero-container" style={{justifyContent: 'space-evenly',alignItems: 'flex-end'}}>
           {/* leftside */}
            <div className="flexStart hero-left">
                <div className="hero-title ">
                    <div className="orange-circle"/>
                    <motion.h2
                    initial={{y:"2rem",opacity:'0'}}
                    animate={{y:"0",opacity:'1'}}
                    transition={{duration:2,type:'spring'}}
                     id='hi'>Hi, I'm</motion.h2>
                    <motion.h1
                     initial={{y:"2rem",opacity:'0'}}
                     animate={{y:"0",opacity:'1'}}
                     transition={{duration:2,type:'spring'}}
                    >Keerthi Sree</motion.h1>
                    <motion.h2
                     initial={{y:"2rem",opacity:'0'}}
                     animate={{y:"0",opacity:'1'}}
                     transition={{duration:2,type:'spring'}}
                     id='fd'>Frontend Developer</motion.h2>
                        <p>
                         I craft User Interfaces that enriches the Web experience
                        </p>
                    <motion.div 
                    className="btn-container flexStart" style={{justifyContent:'space-evenly'}}>
                        <button className="button" style={{marginRight:'2rem'}}>
                            <a href=''>Download CV</a>
                        </button>
                        <button className="button">
                            <a href=''>Let's Talk</a>
                        </button>
                        </motion.div>
                </div>
            </div>
            {/* rightside */}
            <div className="flexCenter hero-right">
                <motion.div
                    initial={{x:"7rem",opacity:'0'}}
                    animate={{x:"0",opacity:'1'}}
                    transition={{duration:2,type:'spring'}} className="image-container">
                    <img src={pfp} alt="pfp" />
                </motion.div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Hero
