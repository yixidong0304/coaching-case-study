const CHALLENGES = [
  {
    title: 'Could not scale',
    body: 'Each new cohort required another two-hour facilitated session, making access dependent on scheduling, staffing, and time zones.',
  },
  {
    title: 'Inconsistent delivery',
    body: 'The depth of explanation, discussion, and practice varied with the facilitator, cohort participation, and available session time.',
  },
  {
    title: 'Passive participation',
    body: 'Learners had limited opportunities to rehearse coaching conversations, or revisit the material at their own pace.',
  },
]

const WORKSHOP_EVIDENCE = [
  {
    src: '/images/original-workshop-1.png',
    alt: 'Original workshop slide with dense coaching content',
    filename: 'original-workshop-1.png',
    note: '1. Content-heavy, required explanation',
  },
  {
    src: '/images/original-workshop-2.png',
    alt: 'Original workshop slide prompting live group discussion',
    filename: 'original-workshop-2.png',
    note: '2. Discussion depended on participation',
  },
  {
    src: '/images/original-workshop-3.png',
    alt: 'Original workshop slide for in-the-moment practice',
    filename: 'original-workshop-3.png',
    note: '3. Lack of reinforcement',
  },
]

const ROWS = CHALLENGES.map((challenge, i) => ({
  challenge,
  evidence: WORKSHOP_EVIDENCE[i],
  number: String(i + 1).padStart(2, '0'),
}))

function WorkshopSlide({ src, alt, filename, note }) {
  return (
    <figure className="workshop-evidence__item">
      <div className="workshop-slide">
        <img
          src={src}
          alt={alt}
          className="workshop-slide__img"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            const fallback = e.currentTarget.nextElementSibling
            if (fallback) fallback.hidden = false
          }}
        />
        <div className="workshop-slide__fallback" hidden>
          <span>{filename}</span>
        </div>
      </div>
      <figcaption className="workshop-annotation">
        <span className="workshop-annotation__dot" aria-hidden="true" />
        <span className="workshop-annotation__line" aria-hidden="true" />
        <span className="workshop-annotation__text">{note}</span>
      </figcaption>
    </figure>
  )
}

export default function Challenge() {
  return (
    <section
      id="problem"
      className="section"
      aria-labelledby="challenge-title"
    >
      <div className="container">
        <header className="section-header section-header--readable">
          <p className="section-title">THE CHALLENGE</p>
          <h2 id="challenge-title">
            A live workshop could not simply be transferred online.
          </h2>
          <p>
            <em>Coaching Skills for Managers</em> was originally designed as a
            two-hour, facilitator-led workshop. Its frameworks and discussion
            content were valuable, but the learning experience depended heavily
            on several factors. Converting it into self-paced eLearning
            therefore required more than transferring the slides into a digital
            format. I identified three issues the new format needed to address:
          </p>
        </header>

        <div className="challenge-split">
          {ROWS.map(({ challenge, evidence, number }) => (
            <div className="challenge-row" key={challenge.title}>
              <div className="challenge-evidence">
                <WorkshopSlide {...evidence} />
              </div>
              <div className="challenge-issues">
                <article className="card challenge-card">
                  <span className="challenge-card__num" aria-hidden="true">
                    {number}
                  </span>
                  <h3>{challenge.title}</h3>
                  <p>{challenge.body}</p>
                </article>
              </div>
            </div>
          ))}
        </div>

        <div className="challenge-callout-wrap">
          <aside className="design-challenge" role="note">
            <span className="analysis-icon design-challenge__icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="13" r="7.25" />
                <circle cx="11" cy="13" r="3.85" />
                <circle cx="11" cy="13" r="1.25" fill="currentColor" stroke="none" />
                <path d="M20.2 3.8 13.6 10.4" />
                <path d="M13.6 10.4 16.1 10.15" />
                <path d="M13.6 10.4 13.85 12.9" />
                <path d="M18.15 3.95 20.5 4.85" />
                <path d="M18.9 5.7 20.5 3.8" />
              </svg>
            </span>
            <div className="design-challenge__copy">
              <p className="design-challenge__label">Design challenge</p>
              <p className="design-challenge__question">
                How might I preserve the value of the original workshop while
                making practice, guidance, and feedback available without a live
                facilitator?
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
