const CHALLENGES = [
  {
    title: 'Could not scale',
    body: 'A two-hour session had to be delivered again for every cohort, new manager, and time zone.',
  },
  {
    title: 'Inconsistent delivery',
    body: 'The learner experience varied with the facilitator, cohort energy, and available session time.',
  },
  {
    title: 'Passive participation',
    body: 'Managers watched frameworks being explained but had limited opportunities to make decisions, practice conversations, or revisit the material afterward.',
  },
]

export default function Challenge() {
  return (
    <section
      id="overview"
      className="section section--tint"
      aria-labelledby="challenge-title"
    >
      <div className="container narrow-intro">
        <h2 id="challenge-title">
          The assignment was not to put a workshop online.
        </h2>
        <p>
          The instructor-led format presented three central limitations. A
          direct slide-to-screen conversion would have reproduced those
          limitations instead of solving them.
        </p>
      </div>

      <div className="container">
        <ul className="challenge-grid">
          {CHALLENGES.map((item, i) => (
            <li className="challenge-card" key={item.title}>
              <span className="challenge-card__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>

        <p className="callout" role="note">
          The redesign was therefore a learning-experience transformation, not
          merely a change in delivery format.
        </p>
      </div>
    </section>
  )
}
