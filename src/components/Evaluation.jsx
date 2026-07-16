const COMPLETED = [
  'Learner analysis',
  'Business analysis',
  'Conversion rationale',
  'Learning objectives',
  'Module structure',
  'Screen-level storyboard',
  'Scenario content',
  'Feedback content',
  'Responsive prototype',
  'Downloadable job-aid concept',
]

const NOT_COMPLETED = [
  'Formal SME validation',
  'Pilot testing with the target audience',
  'LMS implementation',
  'Behavioral follow-up',
  'Business-impact measurement',
]

const LEVELS = [
  {
    level: 'Level 1 — Reaction',
    intro: 'Measure:',
    items: [
      'Relevance to managers’ daily work',
      'Confidence using the coaching frameworks',
      'Perception of the 15-minute format',
      'Usefulness of the scenarios and job aids',
    ],
  },
  {
    level: 'Level 2 — Learning',
    intro: 'Review:',
    items: [
      'Decisions made in OSCAR and GROW activities',
      'Ability to distinguish coaching from directing',
      'Ability to classify and formulate powerful questions',
      'Quality of responses in the final scenarios',
    ],
  },
  {
    level: 'Level 3 — Behavior',
    intro: 'Follow up after several weeks to examine:',
    items: [
      'Use of coaching questions in one-to-ones',
      'Use of OSCAR or GROW during real conversations',
      'Manager reflection or supervisor observation',
      'Continued use of downloadable job aids',
    ],
  },
  {
    level: 'Level 4 — Results',
    intro: 'Where organizational data permits, explore:',
    items: [
      'Team ownership',
      'Reduced dependency on managers',
      'Quality of development conversations',
      'Relevant engagement indicators',
      'Relevant retention indicators',
    ],
  },
]

const NEXT = [
  'Conduct SME review for content accuracy.',
  'Pilot with five to eight target managers.',
  'Observe hesitation and weak decision patterns.',
  'Revise feedback and scenario wording.',
  'Complete accessibility testing.',
  'Package the course for an LMS.',
  'Add completion tracking where required.',
  'Develop a returning-user reference mode for direct framework access.',
]

export default function Evaluation() {
  return (
    <section
      id="evaluation"
      className="section section--tint"
      aria-labelledby="evaluation-title"
    >
      <div className="container">
        <header className="section-header section-header--readable">
          <h2 id="evaluation-title">How I would validate the design</h2>
          <p>
            This portfolio prototype has not yet been implemented with a real
            corporate cohort. The measures below are a proposed evaluation plan,
            not completed results.
          </p>
        </header>

        <div className="status-grid">
          <aside className="status-note" aria-labelledby="completed-title">
            <h3 id="completed-title">Completed</h3>
            <ul className="plain-list">
              {COMPLETED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
          <aside className="status-note status-note--pending" aria-labelledby="pending-title">
            <h3 id="pending-title">
              Not yet completed in a real organizational environment
            </h3>
            <ul className="plain-list">
              {NOT_COMPLETED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="status-guardrail">
              No participant result, business-impact, or deployment claim should
              be invented.
            </p>
          </aside>
        </div>

        <div className="eval-grid">
          {LEVELS.map((level) => (
            <article className="eval-card" key={level.level}>
              <h3>{level.level}</h3>
              <p className="eval-card__intro">{level.intro}</p>
              <ul className="plain-list">
                {level.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="callout callout--quiet" role="note">
          These are proposed evaluation measures, not completed results.
        </p>

        <div className="next-steps">
          <h3>What I would do next</h3>
          <ol className="numbered-list">
            {NEXT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
