import { projects } from "../data"

export default function Projects() {
  return (
    <section id="projects" className="sec">
      <div className="wrap">
        <div className="rv">
          <span className="eyebrow">Projects</span>
          <h2 className="sec__title">Featured <span className="grad">work</span></h2>
          <p className="sec__sub">Real products shipped to production.</p>
        </div>
        {projects.map((p, i) => (
          <article className="card proj rv" key={p.title}>
            <div className="proj__body">
              <span className="proj__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">Launch Site <i className="fa-solid fa-arrow-up-right-from-square" /></a>
            </div>
            <a className="proj__img" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={p.title}>
              <img src={`/assets/${p.img}`} alt={p.title} loading="lazy" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
