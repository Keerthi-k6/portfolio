import React from 'react'
import './About.css'
const skills=[
    'React.js','Node.js','Bootstrap 4','Material UI','JavaScript','Java','Python','C/C++','HTML','CSS','Git','Github','Canva','Figma',
    'MySQL','MongoDb','Express.js','Bash'
]
const About = () => {
  return (
    <section className="about-wrapper">
                <div className="about-title innerwidth paddings flexCenter">
                <h1>About Me</h1>
                <div className="orange-circle1" style={{left:'54%',top:'6%'}}/>
                <div className='about-desc'>
                    Hello!, I am <b style={{color:'var(--blue)'}}>Keerthi Sree</b>, a CS undergrad from SRM University, Amaravati.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos non eaque sapiente modi, quam quibusdam repellendus asperiores sint quos velit?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, fugit!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ad!
                </div>
                        <h1>Skills</h1>
                        <div className="orange-circle1" style={{left:'44%',top:'53%'}}/>
                        <div className="skills-container">
                            <ul>
                            {
                                skills.map(skill=>(
                                    <li className='skill'>{skill}</li>
                                ))
                            } 
                            </ul>                  
                    </div>
                </div>
    </section>
  )
}

export default About
