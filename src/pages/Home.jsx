import { ThemeToggle } from "../components/ThemeToggle"    
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { Homepage } from "../components/Homepage"
import { AboutMe } from "../components/AboutMe"
import { Skills } from "../components/Skills"
import { Projects } from "../components/Projects"
import{ Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { Certification } from "../components/Certifications"
import { Education } from "../components/Education"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Dark Mode Toggle */}
        <ThemeToggle />
        {/* Background effects */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
          <Homepage />
          <AboutMe />
          <Skills />
          <Projects />
          <Education />
          <Certification />
          <Contact />
        </main>
        {/* Footer */}
        <Footer />
    </div>
    )
}