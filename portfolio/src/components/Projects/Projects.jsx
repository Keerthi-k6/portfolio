import React from 'react'
import './Projects.css'
import img1 from '../../assets/code editor.png'
import img2 from '../../assets/newsT.png'
import img3 from '../../assets/weather.png'
const data = [
    {
    id: 1,
    image: img1,
    title: 'CodeCanvas',
    github: 'https://github.com/Keerthi-k6/CodeCanvas',
    live: 'https://codecanvas-huyus7zjs-keerthi-k6.vercel.app/',
    },
    {
        id: 2,
        image: img2,
        title: 'NewsToday',
        github: 'https://github.com/Keerthi-k6/newsToday',
        live: 'https://news-today-red.vercel.app/',
    },
    {
        id: 3,
        image: img3,
        title: 'Weather App',
        github: 'https://github.com/Keerthi-k6/weather-api',
        live: 'https://weather-huyus7zjs-keerthi-k6.vercel.app/',
    },
    {
        id: 4,
        image: img1,
        title: 'CodeCanvas',
        github: 'https://github.com/Keerthi-k6/CodeCanvas',
        live: 'https://codecanvas-huyus7zjs-keerthi-k6.vercel.app/',
    }

]
const Projects = () => {
  return (
    <section className="project-wrapper">
        <div className="innerWidth paddings flexCenter project-container" style={{flexDirection:'column'}}>
            <h1>Projects</h1>
            <div className="projects">
                {
                    data.map(({id,image,title,github, live})=>{
                        return(
                            <article className="project-item" key={id}> 
                                <div className="project-image" >
                                    <img src={image} alt={title} width={400}/>
                                </div>
                                <p>{title}</p>
                                <div className="project-item-cta">
                                <button className="button"><a href={github} target='_blank'>Github</a></button>
                                <button className="button"><a href={live} target='_blank'>Live</a></button>
                                </div>
                            </article>
                        )
                    })
                }
            </div>

        </div>
    </section>
  )
}

export default Projects
