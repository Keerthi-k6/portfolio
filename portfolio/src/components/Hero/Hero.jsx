import React from 'react';
import pfp from '../../assets/pfp.jpg';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { motion } from 'framer-motion';
import styles from './Hero.module.css'; // Import CSS module

const Hero = () => {
    return (
        <>
            <div className={styles['social-container']}>
                <div className={styles['icon-wrapper']}>
                    <div><a href='https://github.com/Keerthi-k6' target='_blank' className={styles.icon}><FaGithub /></a></div>
                    <div><a href='https://www.linkedin.com/in/keerthi-sree-konkimalla' target='_blank' className={styles.icon}><FaLinkedin /></a></div>
                    <div><a href='https://instagram.com/keerthi_sree_konkimalla_?igshid=ZDc4ODBmNjlmNQ==' target='_blank' className={styles.icon}><FaInstagram /></a></div>
                </div>
            </div>
            <section className={styles['hero-wrapper']}>
                <div className={`innerWidth paddings flexCenter ${styles['hero-container']}`} style={{ justifyContent: 'space-evenly', alignItems: 'flex-end' }}>
                    {/* leftside */}
                    <div className={`flexStart ${styles['hero-left']}`}>
                        <div className={styles['hero-title']}>
                            <div className={styles['orange-circle']} />
                            <motion.h2
                                initial={{ y: "2rem", opacity: '0' }}
                                animate={{ y: "0", opacity: '1' }}
                                transition={{ duration: 2, type: 'spring' }}
                                className={styles['hi']}>Hi, I'm</motion.h2>
                            <motion.h1
                                initial={{ y: "2rem", opacity: '0' }}
                                animate={{ y: "0", opacity: '1' }}
                                transition={{ duration: 2, type: 'spring' }}
                            >Keerthi Sree</motion.h1>
                            <motion.h2
                                initial={{ y: "2rem", opacity: '0' }}
                                animate={{ y: "0", opacity: '1' }}
                                transition={{ duration: 2, type: 'spring' }}
                                className={styles['fd']}>Full Stack Developer</motion.h2>
                            <p>
                                Architecting innovative solutions with Full Stack expertise.
                            </p>
                            <motion.div
                                className={`${styles['btn-container']} flexStart`} style={{ justifyContent: 'space-evenly' }}>
                                <button className="button" style={{ marginRight: '2rem' }}>
                                    <a href='https://drive.google.com/drive/folders/1ZUHXT_tX26O5TgExyJiaEhXtXMiXCy96' target='_blank'>Download CV</a>
                                </button>
                                <button className="button">
                                    <a href='mailto:Keerthisree.k6@gmail.com' target='_blank'>Let's Talk</a>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                    {/* rightside */}
                    <div className={`flexCenter ${styles['hero-right']}`}>
                        <motion.div
                            initial={{ x: "7rem", opacity: '0' }}
                            animate={{ x: "0", opacity: '1' }}
                            transition={{ duration: 2, type: 'spring' }} className={styles['image-container']}>
                            <img src={pfp} alt="pfp" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;
