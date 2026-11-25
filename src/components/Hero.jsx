import { useTyping } from "../hooks"
import { RESUME } from "../data"

const chips = [
  ["🧠 Full Stack AI Development", "chip--1"],
  ["✨ Generative AI Engineering", "chip--2"],
  ["🐍 Python", "chip--3"],
  ["⚡ FastAPI", "chip--4"],
  ["🔥 Laravel", "chip--5"],
  ["🟢 Node.js", "chip--6"],
]

export default function Hero() {
  const role = useTyping(["Full Stack AI Developer", "Generative AI Engineer", "Python • FastAPI • PHP • Laravel", "Node.js • React.js Builder", "Building AI Automation"])
  return (
    <section id="hero" className="hero">
      <div className="wrap hero__grid">
        <div>
          <div className="pill"><b /> Full Stack AI Developer | Generative AI Engineer</div>
          <h1 className="hero__name">Haider Ali — Full Stack AI Developer &amp; Generative AI Engineer</h1>
          <div className="hero__role">{role}<span className="caret" /></div>
          <p className="tech-line">Python • FastAPI • PHP • Laravel • Node.js • React.js</p>
          <p className="lead">I design and ship full stack web applications, Generative AI products and AI automation — LLM apps, agents and RAG pipelines end to end on Python, FastAPI, PHP, Laravel, Node.js and React.js — backed by 5+ years of full stack engineering.</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#ai">See AI Services <i className="fa-solid fa-arrow-right" /></a>
            <a className="btn btn--ghost" href="#projects">Explore Projects</a>
            <a className="btn btn--ghost" href={RESUME} target="_blank" rel="noopener noreferrer">Resume <i className="fa-solid fa-file-arrow-down" /></a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="avatar"><img src="/assets/profile.jpeg" alt="Haider Ali" /></div>
          {chips.map(([label, cls]) => (
            <div className={`chip ${cls}`} key={label}>{label}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
