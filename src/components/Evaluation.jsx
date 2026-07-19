const LEVELS = [
  {
    level: 'Level 1 · Reaction',
    question: 'Did managers find the experience relevant and usable?',
    description:
      'A short end-of-module survey would measure relevance to daily work, confidence using the frameworks, and the usefulness of the scenarios, job aids, and 30-minute format.',
  },
  {
    level: 'Level 2 · Learning',
    question: 'Can managers make sound coaching decisions?',
    description:
      'Evidence comes from the built-in coaching-versus-directing check, OSCAR and GROW conversations, question activities, and integrated real-situation practice.',
  },
  {
    level: 'Level 3 · Behavior',
    question: 'Are managers using the skills at work?',
    description:
      'Several weeks later, follow up on the use of coaching questions, OSCAR or GROW in real conversations, manager reflection, supervisor observation, and continued use of the job aids.',
  },
  {
    level: 'Level 4 · Results',
    question: 'Did those behavior changes support organizational outcomes?',
    description:
      'Where data permits, explore changes in team ownership, dependency on managers, development-conversation quality, and relevant engagement or retention indicators.',
  },
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
          <p className="section-title">Evaluation</p>
          <h2 id="evaluation-title">Evaluation, built in, not bolted on</h2>
          <p>
            Because the module has not yet been implemented in a real
            organization, the following are proposed measures—not reported
            outcomes.
          </p>
        </header>

        <p className="callout callout--quiet" role="note">
          The required practice already generates Level 2 learning evidence, so
          assessment is part of the experience rather than a separate final
          test.
        </p>

        <div className="eval-grid">
          {LEVELS.map((level) => (
            <article className="eval-card" key={level.level}>
              <h3>{level.level}</h3>
              <p className="eval-card__intro">{level.question}</p>
              <p>{level.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
