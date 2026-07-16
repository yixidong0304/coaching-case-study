const PRINCIPLES = [
  'Break dense material into short, single-focus segments.',
  'Reveal information progressively.',
  'Demonstrate a skill before asking learners to perform it.',
  'Replace passive presentation with decisions and feedback.',
  'Use realistic situations rather than decontextualized recall.',
  'Treat incorrect selections as opportunities to teach.',
  'Provide job aids that support workplace transfer.',
]

export default function Strategy() {
  return (
    <section className="section" aria-labelledby="strategy-title">
      <div className="container">
        <header className="section-header section-header--readable">
          <h2 id="strategy-title">Instructional strategy</h2>
          <p>
            The project follows the Analyze, Design, Develop, Implement, and
            Evaluate logic of ADDIE.
          </p>
        </header>

        <p className="strategy-lead">
          The conversion also uses several core principles:
        </p>
        <ul className="principle-grid">
          {PRINCIPLES.map((item, i) => (
            <li className="principle-card" key={item}>
              <span className="principle-card__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
