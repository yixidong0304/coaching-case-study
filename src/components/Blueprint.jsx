import { JOURNEY } from '../config'

export default function Blueprint() {
  return (
    <section className="section section--tint" aria-labelledby="blueprint-title">
      <div className="container">
        <header className="section-header section-header--readable">
          <h2 id="blueprint-title">
            The structure follows how the skill is used—not the original slide
            order
          </h2>
          <p>
            The original material separated frameworks by presentation topic. I
            reorganized it into a learner-centered progression: understand the
            coaching mindset, learn the core skills, and apply them in real
            situations.
          </p>
        </header>

        <ol className="blueprint">
          {JOURNEY.map((step, index) => (
            <li className="blueprint__stage" key={step.stage}>
              <div className="blueprint__head">
                <span className="blueprint__marker" aria-hidden="true">
                  {index + 1}
                </span>
                <h3>{step.stage}</h3>
              </div>
              {step.summary ? <p className="blueprint__summary">{step.summary}</p> : null}
              {step.items?.length ? (
                <ul className="plain-list">
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {step.subsections?.map((sub) => (
                <div className="blueprint__sub" key={sub.title}>
                  <h4>{sub.title}</h4>
                  <ul className="plain-list">
                    {sub.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
