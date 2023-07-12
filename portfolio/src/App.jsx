import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import './App.css'
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import { motion } from "framer-motion"
function App() {


  return (
    <div className="App">
      <div>
      <Header />
        <div className="white-gradient"/>
      <Hero/>
        <motion.div
          className="white-gradient" style={{right:'0'}}/>
      <About/>
        <div className="white-gradient" style={{top:'45%',left:'10%',opacity:'0.9', width:'15rem',height:'15rem',filter:'blur(10rem)'}}/>
      <Projects/>
        <div className="white-gradient" style={{top:'80%',right:'10%',opacity:'0.9', width:'15rem',height:'15rem',filter:'blur(10rem)'}}/>
      <Contact/>
    </div>
    </div>
    
  )
}

export default App
