import { OBJECTIVES } from '../config'

const EVIDENCE_ICONS = {
  check: (
    <>
      <path d="M9 11.5 11 13.5 15.5 9" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </>
  ),
  branch: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M8 7.5v3.2c0 1.5 1.2 2.8 2.8 2.8H12" />
      <path d="M16 7.5v3.2c0 1.5-1.2 2.8-2.8 2.8H12" />
      <path d="M12 13.5V16" />
    </>
  ),
  question: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.6 9.4a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.2.9-1.2 1.8" />
      <path d="M12 17h.01" />
    </>
  ),
  stages: (
    <>
      <path d="M5 7h14" />
      <path d="M5 12h14" />
      <path d="M5 17h14" />
      <circle cx="9" cy="7" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="13" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="17" cy="17" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
  compare: (
    <>
      <rect x="3.5" y="5" width="7" height="14" rx="1.5" />
      <rect x="13.5" y="5" width="7" height="14" rx="1.5" />
      <path d="M6 9h2" />
      <path d="M6 12h2.5" />
      <path d="M16 9h2" />
      <path d="M16 12h2.5" />
    </>
  ),
}

function bloomChipClass(level) {
  return `hero__chip bloom-chip bloom-chip--${level.toLowerCase()}`
}

function EvidenceIcon({ name }) {
  return (
    <span className="analysis-icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {EVIDENCE_ICONS[name]}
      </svg>
    </span>
  )
}

export default function Objectives() {
  return (
    <section
      id="objectives"
      className="section"
      aria-labelledby="objectives-title"
    >
      <div className="container">
        <header className="section-header section-header--readable">
          <p className="section-title">DEFINING SUCCESS</p>
          <h2 id="objectives-title">
            Translated the performance gap into observable outcomes.
          </h2>
          <p>
            With the learner and organizational needs clear, I defined how the
            course would help them get there using Bloom’s taxonomy to define
            the level of performance each objective required.
          </p>
        </header>

        <div
          className="objectives-map"
          role="table"
          aria-label="Learning objectives mapped to Bloom’s levels and evidence"
        >
          <div className="objectives-map__head" role="row">
            <div role="columnheader">Objective</div>
            <div role="columnheader">Bloom’s level</div>
            <div role="columnheader">Learning evidence</div>
          </div>
          {OBJECTIVES.map((row) => (
            <article
              className="objectives-map__row"
              role="row"
              key={row.id}
              aria-label={`Objective ${String(row.id).padStart(2, '0')}`}
            >
              <div className="objectives-map__objective" role="cell">
                <span className="subtitle objectives-map__num">
                  {String(row.id).padStart(2, '0')}
                </span>
                <p>{row.objective}</p>
              </div>
              <div className="objectives-map__bloom" role="cell">
                <span className="obj-label">Bloom’s level</span>
                <div className="objectives-bloom">
                  {row.bloom.map((level) => (
                    <span className={bloomChipClass(level)} key={level}>
                      {level}
                    </span>
                  ))}
                </div>
              </div>
              <div className="objectives-map__evidence" role="cell">
                <span className="obj-label">Learning evidence</span>
                <div className="objectives-evidence">
                  {row.icon ? <EvidenceIcon name={row.icon} /> : null}
                  <p>{row.evidence}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="banner" role="note">
          The goal was not for managers to simply recall the frameworks, but to
          make sound coaching decisions in realistic situations.
        </p>
      </div>
    </section>
  )
}
