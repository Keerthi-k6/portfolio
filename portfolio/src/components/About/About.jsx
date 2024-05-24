import React from 'react';
import styles from './About.module.css';

const skills = [
    'MongoDb','React Js', 'Node Js','Express','AWS','JavaScript',  'HTML', 'CSS', 'C/C++', 'Java', 'Python',  'Git & GitHub','Bash','MySQL','Machine Learning','Data Science'
];
const experiences = [
    {
        company: 'MIQ Digital',
        position: 'Data Analyst Intern',
        duration: 'Apr’24 - Present',
        description: 'Currently working on a project to enhance advertiser insights and optimize geo-targeting strategies, leveraging advanced analytics and machine learning algorithms.'
    },
    {
        company: 'Cyclo Tech',
        position: 'Software Development Intern',
        duration: 'Jan’24 - May’24',
        description: 'Developed REST APIs for Aid and POS (Point of Sale) applications using Node.js, facilitating seamless communication between the frontend and backend systems.'
    }
];

const About = () => {
    return (
        <>
        <section className={styles['about-wrapper']} id='about'>
            <div className={`${styles['about-title']} paddings flexCenter`}>
                <h1>About Me</h1>
                <div className={styles['orange-circle1']} style={{ left: '54%', top: '5%' }} />
                <div className={styles['about-desc']}>
                    Hello!, I am <b style={{ color: 'var(--blue)' }}>Keerthi Sree</b>, a BTech student at SRM University, deeply curious about technology. Proficient in the MERN stack, I specialize in developing dynamic web applications. Currently learning Data Science with some hands-on experience in AWS, I am committed to continuous growth and innovation in these areas. Eager to push boundaries and innovate, I thrive on challenges that expand my horizons. I look forward to exploring new opportunities and making meaningful contributions in the tech industry!
                </div>
                <h1>Skills</h1>
                <div className={styles['orange-circle1']} style={{ left: '44%', top: '57%' }} />
                <div className={styles['skills-container']}>
                    <ul>
                        {skills.map((skill, index) => (
                            <li className={styles.skill} key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        <section className={styles['about-wrapper']} id='exp'>
            <div className={`${styles['about-title']} paddings flexCenter`}>
                <h1>Experiences</h1>
                <div className={styles['orange-circle1']} style={{ left: '58%', top: '5%' }} />
                <div className={styles['exp-container']}>
                    {experiences.map((exp, index) => (
                        <div className={styles['exp-entry']} key={index}>
                            <div className={styles['exp-details']}>
                                <h2>{exp.company}</h2>
                                <p>{exp.position}</p>
                                <p>{exp.duration}</p>
                            </div>
                            <p className={styles['exp-description']}>{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        </>
    );
}

export default About;
