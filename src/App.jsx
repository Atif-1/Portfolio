import { About } from "@/section/About"
import { Experience } from "@/section/Experience"
import { Hero } from "@/section/Hero"
import {Contact} from "@/section/Contact"
import { Navbar } from "@/layout/Navbar"
import { Footer } from "@/layout/Footer"
import { Projects } from "@/section/Projects"
import { Certifications } from "@/section/Certifications"

function App() {

  return <div className="min-h-screen overflow-x-hidden">
    <Navbar/>
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </main>


  </div>
  
  
}

export default App
