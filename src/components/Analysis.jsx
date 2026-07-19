const LEARNER_ROWS = [
  {
    id: 'who',
    label: 'Who they are',
    finding:
      'New and mid-level managers promoted for strong individual work, with limited formal people-management training.',
    icon: 'person',
  },
  {
    id: 'time',
    label: 'Time & context',
    finding:
      'Days are fragmented by back-to-back meetings, so coaching has to happen in short, practical moments.',
    icon: 'clock',
  },
  {
    id: 'behavior',
    label: 'Current behavior',
    finding:
      'Many default to directing because telling someone what to do feels faster in the moment.',
    icon: 'sliders',
  },
  {
    id: 'motivation',
    label: 'Motivation',
    finding:
      'They care about team performance, ownership, and retention, not completing another training module.',
    icon: 'heart',
  },
]

const ORG_NEED = [
  {
    id: 'gap',
    label: 'Performance gap',
    body: 'Managers often default to directing instead of developing employees through coaching.',
    icon: 'chart',
  },
  {
    id: 'goal',
    label: 'Business goal',
    body: 'Help managers use practical coaching behaviors in everyday work.',
    icon: 'bullseye',
  },
  {
    id: 'value',
    label: 'Organizational value',
    body: 'More capable teams, stronger ownership, and more consistent development across cohorts and time zones.',
    icon: 'users',
  },
]

/** Consistent 24×24 line icons — shared stroke weight and optical weight. */
function AnalysisIcon({ name }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  const paths = {
    person: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c1.5-3.2 3.9-4.8 7-4.8s5.5 1.6 7 4.8" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 1.75" />
      </>
    ),
    sliders: (
      <>
        <line x1="7" y1="4" x2="7" y2="20" />
        <line x1="12" y1="4" x2="12" y2="20" />
        <line x1="17" y1="4" x2="17" y2="20" />
        <circle cx="7" cy="9" r="2.25" />
        <circle cx="12" cy="15" r="2.25" />
        <circle cx="17" cy="8" r="2.25" />
      </>
    ),
    heart: (
      <path d="M19.5 12.5c1.5-1.6 1.5-4.2 0-5.8a3.8 3.8 0 0 0-5.5 0L12 8.7l-2-2a3.8 3.8 0 0 0-5.5 0c-1.5 1.6-1.5 4.2 0 5.8L12 20.5l7.5-8z" />
    ),
    chart: (
      <>
        <path d="M3 20h18" />
        <path d="M6 16V11" />
        <path d="M10 16V8" />
        <path d="M14 16v-5" />
        <path d="M18 16V6" />
        <path d="M4.5 13.5 9.5 8.5l3.5 2.5 6-6.5" />
        <path d="M16 4.5h3.5V8" />
      </>
    ),
    bullseye: (
      <>
        <circle cx="11" cy="13" r="7" />
        <circle cx="11" cy="13" r="3.75" />
        <circle cx="11" cy="13" r="1.2" fill="currentColor" stroke="none" />
        <path d="m20.5 3.5-7.2 7.2" />
        <path d="M16.5 3.5h4v4" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3.25" />
        <path d="M2.5 19.5c1.1-3 3.3-4.5 6.5-4.5s5.4 1.5 6.5 4.5" />
        <circle cx="17.5" cy="8.5" r="2.5" />
        <path d="M14.5 15.2c1.6-.55 3.2-.3 4.8.9.9.7 1.6 1.6 2 2.9" />
        <path d="M15.2 6.2a2.2 2.2 0 1 1 0 4.2" />
      </>
    ),
  }

  return (
    <span className="analysis-icon">
      <svg {...common}>{paths[name]}</svg>
    </span>
  )
}

export default function Analysis() {
  return (
    <section id="insight" className="section" aria-labelledby="analysis-title">
      <div className="container">
        <header className="section-header section-header--readable analysis-intro">
          <p className="section-title">UNDERSTANDING THE LEARNER</p>
          <h2 id="analysis-title">
            The objection wasn’t “I don’t get it.” It was “
            <strong className="insight-emphasis">I don’t have time.</strong>”
          </h2>
          <p>
            Before designing the course, I analyzed both the learner and the
            organizational context to understand what was preventing coaching
            from happening in day-to-day work.
          </p>
        </header>

        <div className="analysis-group">
          <h3 className="section-title analysis-group__heading">
            The learner analysis
          </h3>
          <div className="learner-rows" role="list">
            {LEARNER_ROWS.map((row) => (
              <div className="learner-row" role="listitem" key={row.id}>
                <AnalysisIcon name={row.icon} />
                <p className="learner-row__label">{row.label}</p>
                <p className="learner-row__finding">{row.finding}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="analysis-group analysis-group--org">
          <h3 className="section-title analysis-group__heading">
            The organizational need
          </h3>
          <div className="org-need" role="list">
            {ORG_NEED.map((item) => (
              <div className="org-need__item" role="listitem" key={item.id}>
                <AnalysisIcon name={item.icon} />
                <p className="org-need__label">{item.label}</p>
                <p className="org-need__body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="banner analysis-synthesis" role="note">
          Together, these findings shaped the redesign: the course had to{' '}
          <strong className="insight-emphasis">fit into a manager’s day</strong>{' '}
          while supporting the organization’s goal of{' '}
          <strong className="insight-emphasis">
            building more capable, autonomous teams
          </strong>
          .
        </p>
      </div>
    </section>
  )
}
