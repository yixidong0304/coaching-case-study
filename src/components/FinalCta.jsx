import { COURSE_URL, REPORT_URL, PORTFOLIO_URL } from '../config'

export default function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="container final-cta__inner">
        <p className="section-title section-title--on-dark">Experience the outcome</p>
        <h2 id="final-cta-title">See the design in action</h2>
        <p>
          Explore the working module: the OSCAR branching scenario, question
          practice, GROW conversation, and downloadable coaching tools, or read
          the full process report behind it.
        </p>
        <div className="final-cta__actions">
          <a
            className="btn btn--on-dark"
            href={COURSE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View the live module
          </a>
          <a
            className="btn btn--ghost-on-dark"
            href={REPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the full process report
          </a>
          <a className="final-cta__text-link" href={PORTFOLIO_URL}>
            Back to portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
