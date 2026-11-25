import { aiServices } from "../data"

export default function AI() {
  return (
    <section id="ai" className="sec ai-sec">
      <div className="wrap">
        <div className="rv">
          <span className="eyebrow">Services</span>
          <h2 className="sec__title">What I <span className="grad">build</span></h2>
          <p className="sec__sub">AI and automation first, backed by full stack development and cloud applications — from prototype to production.</p>
        </div>
        <div className="ai-grid">
          {aiServices.map((s, i) => (
            <div className="card ai-card rv" key={s.title}>
              <div className="ai-card__icon"><i className={`fa-solid ${s.icon}`} /></div>
              <span className="ai-card__n">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="ai-stack rv">
          <span>Stack</span>
          {["Python", "FastAPI", "PHP", "Laravel", "Node.js", "React.js", "LLM APIs", "LangChain", "Vector DBs", "n8n", "Docker", "AWS"].map((t) => <b key={t}>{t}</b>)}
        </div>
      </div>
    </section>
  )
}
