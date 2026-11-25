import { skillGroups } from "../data"
import Icon from "./Icon"

export default function Skills() {
  return (
    <section id="skills" className="sec">
      <div className="wrap">
        <div className="rv">
          <span className="eyebrow">Skills</span>
          <h2 className="sec__title">My <span className="grad">toolbox</span></h2>
          <p className="sec__sub">Languages, frameworks, and platforms I work with every day.</p>
        </div>
        {skillGroups.map((g) => (
          <div className="skill-group rv" key={g.title}>
            <h3>{g.title}</h3>
            <div className="skill-list">
              {g.items.map(([img, name]) => (
                <div className={`skill${g.ai ? " skill--ai" : ""}`} key={name}><Icon src={img} />{name}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
