import { EMAIL } from "../data"

export default function Contact() {
  return (
    <section id="contact" className="sec">
      <div className="wrap">
        <div className="card contact rv">
          <span className="eyebrow">Contact</span>
          <h2>Let's build something <span className="grad">extraordinary</span></h2>
          <p>Ready to start a project? Drop me a line.</p>
          <a href={`mailto:${EMAIL}`} className="btn btn--primary">Send Email <i className="fa-solid fa-paper-plane" /></a>
        </div>
      </div>
    </section>
  )
}
