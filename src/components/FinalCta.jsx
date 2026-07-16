import { COURSE_URL, PORTFOLIO_URL } from '../config'

export default function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="container final-cta__inner">
        <p className="eyebrow eyebrow--on-dark">Experience the outcome</p>
        <h2 id="final-cta-title">See the learning design in action.</h2>
        <p>
          Explore the self-paced prototype, including the OSCAR scenario,
          powerful-question practice, GROW conversation, and downloadable
          coaching tools.
        </p>
        <div className="final-cta__actions">
          <a
            className="btn btn--on-dark"
            href={COURSE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Experience the course
          </a>
          <a className="btn btn--ghost-on-dark" href={PORTFOLIO_URL}>
            Back to Cici Dong’s portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
