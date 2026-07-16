const BEFORE = [
  'Two-hour scheduled session',
  'Repeated for each cohort',
  'Presenter-controlled pace',
  'Dense explanatory slides',
  'Limited practice',
  'Facilitator-dependent experience',
  'Few post-session resources',
]

const AFTER = [
  'Approximately 15 minutes',
  'Available on demand',
  'Learner-controlled and resumable',
  'Progressive, single-focus screens',
  'Guided examples and decision activities',
  'Standardized learning experience',
  'Downloadable job aids',
]

export default function Conversion() {
  return (
    <section className="section section--tint" aria-labelledby="conversion-title">
      <div className="container">
        <header className="section-header section-header--readable">
          <h2 id="conversion-title">What changed in the conversion</h2>
          <p>
            The asynchronous version responds directly to the limitations of the
            original format.
          </p>
        </header>

        <div className="compare" role="group" aria-label="Before and after comparison">
          <div className="compare__col compare__col--before">
            <h3>
              <span className="compare__tag">Before</span>
              Instructor-led workshop
            </h3>
            <ul className="plain-list">
              {BEFORE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="compare__col compare__col--after">
            <h3>
              <span className="compare__tag compare__tag--after">After</span>
              Asynchronous redesign
            </h3>
            <ul className="plain-list">
              {AFTER.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="callout callout--quiet" role="note">
          The redesigned course is shorter because presentation time and
          repetition were removed—not because the learning substance was removed.
        </p>
      </div>
    </section>
  )
}
