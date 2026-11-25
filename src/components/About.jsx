import { RESUME, stats } from "../data"

export default function About() {
  return (
    <section id="about" className="sec">
      <div className="wrap">
        <div className="rv">
          <span className="eyebrow">About</span>
          <h2 className="sec__title">AI products that <span className="grad">scale</span></h2>
          <p className="sec__sub">A snapshot of who I am and what I do.</p>
        </div>
        <div className="bento">
          <div className="card b-about rv">
            <p>I'm a Full Stack AI Developer and Generative AI Engineer — I turn AI into products that automate real work.</p>
            <p>I build with Python and FastAPI for AI, and PHP, Node.js, React.js, Laravel, Next.js and Vue.js for the product around it — seamless experiences backed by robust systems.</p>
            <p>I build and integrate eCommerce marketplaces — connecting stores with Shopify, WooCommerce, Amazon, eBay, Kaufland, Temu, and more.</p>
          </div>
          {stats.map(([n, l]) => (
            <div className="card b-stat rv" key={l}>
              <strong className="grad">{n}</strong><span>{l}</span>
            </div>
          ))}
          <div className="card b-cta rv">
            <h3>Want the full story?</h3>
            <a href={RESUME} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">View Resume <i className="fa-solid fa-arrow-up-right-from-square" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
