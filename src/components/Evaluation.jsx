const LEVELS = [
  {
    level: 'Level 1 · Reaction',
    line: 'Is it relevant and usable? A short end-of-module survey on relevance, confidence, and the 30-minute format.',
  },
  {
    level: 'Level 2 · Learning',
    line: 'Did they acquire the skills? The decisions made in the OSCAR, GROW, and question activities already generate this evidence.',
  },
  {
    level: 'Level 3 · Behavior',
    line: 'Are they coaching differently weeks later? Use of coaching questions and GROW in real 1:1s, plus continued job-aid use.',
  },
  {
    level: 'Level 4 · Results',
    line: 'Did it move anything the organization cares about? Team ownership, reduced manager-dependency, and engagement indicators where data permits.',
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
            The module hasn’t run in a real organization yet, so these are
            proposed measures, not results. The design point: the practice
            activities learners complete to finish the module ARE the Level 2
            evidence. Assessment is a byproduct of the experience, not a
            separate test.
          </p>
        </header>

        <div className="eval-grid">
          {LEVELS.map((level) => (
            <article className="eval-card" key={level.level}>
              <h3>{level.level}</h3>
              <p>{level.line}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
