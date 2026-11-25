import { useEffect, useRef } from "react"
import { useReveal, useSpotlight } from "./hooks"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import About from "./components/About"
import AI from "./components/AI"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  const bar = useRef(null)
  const glow = useRef(null)
  useReveal()
  useSpotlight()

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      bar.current.style.width = `${(h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100}%`
    }
    const onMove = (e) => {
      glow.current.style.left = `${e.clientX}px`
      glow.current.style.top = `${e.clientY}px`
    }
    window.addEventListener("scroll", onScroll)
    window.addEventListener("mousemove", onMove)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("mousemove", onMove)
    }
  }, [])

  return (
    <>
      <div className="progress" ref={bar} />
      <div className="aurora"><i /><i /><i /></div>
      <div className="grid-bg" />
      <div className="cursor-glow" ref={glow} />
      <Nav />
      <Hero />
      <Marquee />
      <AI />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
