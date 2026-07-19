import { PORTFOLIO_URL } from '../config'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__prompt">
          Thanks for stopping by!
          <br />
          Like my work and want to chat? Let&apos;s connect ↓
        </p>

        <p className="site-footer__links">
          <a href="mailto:yixidong0034@gmail.com">Email</a>
          <span className="site-footer__sep" aria-hidden="true">
            {' '}
            |{' '}
          </span>
          <a
            href="https://www.linkedin.com/in/cicid"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>

        <p className="site-footer__bridge">
          <a href={PORTFOLIO_URL}>
            ← Back to Cici Dong&apos;s portfolio to see more work
          </a>
        </p>

        <p className="site-footer__disclaimer">
          Case study created as an anonymized portfolio project. All source
          branding, company names, and internal references are anonymized.
        </p>

        <p className="site-footer__signature">
          Crafted with love and passion by Cici Dong © 2026
        </p>
      </div>
    </footer>
  )
}
