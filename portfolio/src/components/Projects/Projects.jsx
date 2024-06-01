import React from 'react';
import styles from './Projects.module.css';

import img1 from '../../assets/CC.png';
import img5 from '../../assets/bb-1.png';
import img6 from '../../assets/ca.png';
import img7 from '../../assets/BlogSpace.png';
import img8 from '../../assets/mbti.png';
import img3 from '../../assets/weather.png';
const data = [
    {
        id: 1,
        image: img7,
        title: 'BlogSpace',
        github: 'https://github.com/Keerthi-k6/blogAppMern',
        live: 'https://66112e70a087c7cff1e84cef--blogapp-k6.netlify.app/',
    },
    {
        id: 2,
        image: img5,
        title: 'Boss Burger',
        github: 'https://github.com/Keerthi-k6/Boss-burger',
        live: 'https://bossburgerb6.netlify.app/',
    },
    {
        id: 3,
        image: img1,
        title: 'CodeCanvas',
        github: 'https://github.com/Keerthi-k6/CodeCanvas',
        live: 'https://6649a525089caa806d463d6c--bright-banoffee-286a45.netlify.app/',
    },
    {
        id: 4,
        image: img8,
        title: 'MBTI Personality Predictor',
        github: 'https://github.com/Keerthi-k6/ML-project',
        live: '',
    },
    {
        id: 5,
        image: img6,
        title: 'Chat Application',
        github: 'https://github.com/Keerthi-k6/Chat_application',
        live: '',
    },
    {
        id: 6,
        image: img3,
        title: 'Weather Application',
        github: 'https://github.com/Keerthi-k6/weather-api',
        live: 'https://weather-api-tau-virid.vercel.app/',
    }
];

const Projects = () => {
    return (
        <section className={styles['project-wrapper']} id='projects'>
            <div className={`innerWidth paddings flexCenter ${styles['project-container']}`} style={{ flexDirection: 'column' }}>
                <h1>Projects</h1>
                <div className={styles['projects']}>
                    {data.map(({ id, image, title, github, live }) => {
                        return (
                            <article className={styles['project-item']} key={id}>
                                <div className={styles['project-image']}>
                                    <img src={image} alt={title} width={400} style={{ opacity: '1.2' }} />
                                </div>
                                <p>{title}</p>
                                <div className={styles['project-item-cta']}>
                                    <button className={"button " + styles['project-btn']}><a href={github} target='_blank'>Github</a></button>
                                    {
                                        live.length === 0 ? <></> : <button className="button"><a href={live} target='_blank'>Live</a></button>
                                    }
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;
