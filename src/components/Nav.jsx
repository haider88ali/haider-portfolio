import { useEffect, useState } from "react"
import { EMAIL, navLinks } from "../data"

export default function Nav() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("theme") !== "light" } catch { return true }
  })
  const [active, setActive] = useState("")

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light"
    try { localStorage.setItem("theme", dark ? "dark" : "light") } catch {}
  }, [dark])

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    )
    navLinks.forEach(([, h]) => { const el = document.querySelector(h); el && io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <nav className="nav">
      <a href="#hero" className="nav__logo">haider<span className="grad">.dev</span></a>
      <ul className="nav__links">
        {navLinks.map(([label, href]) => (
          <li key={href}><a href={href} className={active === href.slice(1) ? "active" : ""}>{label}</a></li>
        ))}
      </ul>
      <div className="nav__right">
        <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
          <i className={`fa-solid ${dark ? "fa-sun" : "fa-moon"}`} />
        </button>
        <a href={`mailto:${EMAIL}`} className="btn btn--primary btn--sm">Hire Me</a>
      </div>
    </nav>
  )
}
