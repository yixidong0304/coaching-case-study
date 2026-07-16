const WORK_CONTEXT = [
  'Back-to-back meetings',
  'Fragmented attention',
  'Short one-to-one conversations',
  'Immediate performance pressures',
  'Limited time for formal training',
]

const BUSINESS_GOALS = [
  'Structuring feedback through OSCAR',
  'Asking open and purposeful questions',
  'Listening before proposing a solution',
  'Running a short GROW conversation',
  'Knowing when clear direction is more appropriate than coaching',
]

export default function Analysis() {
  return (
    <section className="section" aria-labelledby="analysis-title">
      <div className="container">
        <header className="section-header section-header--readable">
          <h2 id="analysis-title">
            Designing for managers who believe they do not have time to coach
          </h2>
        </header>

        <div className="analysis-block">
          <h3>Learner analysis</h3>
          <p className="analysis-lead">
            The target learners are new and mid-level managers or team leads.
            Many were promoted because they performed well in their functions
            but received little formal people-management training.
          </p>

          <p className="analysis-subhead">Their work context includes:</p>
          <ul className="plain-list">
            {WORK_CONTEXT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p>
            They tend to default to directing because it feels faster:
          </p>
          <blockquote className="inline-quote">
            <p>“Here is exactly what you should do.”</p>
          </blockquote>
          <p>
            They are motivated by team performance, stronger ownership, better
            decisions, and retaining good employees—not by completing an L&amp;D
            requirement.
          </p>
        </div>

        <aside className="insight" aria-labelledby="insight-title">
          <p className="insight__label" id="insight-title">
            Key learner insight
          </p>
          <p className="insight__quote">
            The central objection was not “I do not understand coaching.” It was
            “I do not have time to coach.”
          </p>
          <div className="insight__response">
            <p className="insight__response-label">Design implication</p>
            <p>
              The module is organized around coaching in minutes: short,
              single-focus sections, resumable progress, everyday management
              situations, five-to-ten-minute conversation examples, and reusable
              workplace job aids.
            </p>
          </div>
        </aside>

        <div className="business-grid">
          <article className="two-col__panel">
            <h3>Performance gap</h3>
            <p>
              Managers frequently solve problems by directing employees instead
              of helping them think through decisions. This can keep teams
              dependent on the manager and limit employee ownership and
              capability.
            </p>
          </article>

          <article className="two-col__panel">
            <h3>Business goal</h3>
            <p className="analysis-subhead">
              Managers use small coaching behaviors in daily work, including:
            </p>
            <ul className="plain-list">
              {BUSINESS_GOALS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <article className="org-value">
          <h3>Organizational value</h3>
          <p>
            Managers who coach can develop stronger problem-solving and ownership
            across their teams. A standardized asynchronous course can also
            provide more consistent access across cohorts and time zones.
          </p>
        </article>
      </div>
    </section>
  )
}
