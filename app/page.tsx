import Navbar from "@/components/layout/navbar"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Education from "@/components/sections/education"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"
import Footer from "@/components/layout/footer"
import ScrollToTop from "@/components/ui/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
