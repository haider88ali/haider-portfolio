import { GITHUB, LINKEDIN } from "../data"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} Haider Ali. All rights reserved.</span>
        <div className="socials">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="linkedin"><i className="fa-brands fa-linkedin-in" /></a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="github"><i className="fa-brands fa-github" /></a>
          <a href="#hero" aria-label="back to top"><i className="fa-solid fa-arrow-up" /></a>
        </div>
      </div>
    </footer>
  )
}
