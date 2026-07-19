const COMPLETED = [
  'Learner and business analysis',
  'Conversion rationale and measurable objectives',
  'Screen-level storyboard',
  'Scenario and feedback content',
  'A responsive, working prototype',
  'Downloadable job-aid concept',
]

const REQUIRES_ORG = [
  'Formal SME validation',
  'Pilot testing with target managers',
  'LMS implementation and completion tracking',
  'Behavioral follow-up and business-impact measurement',
]

const NEXT = [
  'SME review for content accuracy',
  'Pilot with 5–8 target managers, observing where they hesitate',
  'Revise feedback and scenarios from those patterns',
  'Accessibility testing, then package for an LMS',
]

const NOTES = [
  {
    id: 'completed',
    label: 'Note 1',
    title: 'Completed',
    tone: 'sage',
    items: COMPLETED,
  },
  {
    id: 'requires',
    label: 'Note 2',
    title: 'Requires a real organization',
    tone: 'sky',
    items: REQUIRES_ORG,
  },
  {
    id: 'next',
    label: 'Note 3',
    title: 'What I’d do next',
    tone: 'amber',
    lead: 'The next moves are the production steps a real engagement adds:',
    items: NEXT,
  },
]

export default function Reflection() {
  return (
    <section id="reflection" className="section" aria-labelledby="reflection-title">
      <div className="container">
        <header className="section-header section-header--readable">
          <h2 id="reflection-title">What this project taught me</h2>
          <p>
            My UX background helped me organize complex information and
            prototype clear interactions. This project taught me to begin
            earlier with a performance need, and align objectives, practice,
            and feedback before designing the interface.
          </p>
          <p className="callout callout--quiet" role="note">
            The hardest part was not writing answer choices. It was writing
            feedback that could teach.
          </p>
          <p>
            In the Sam practice, every weak response had to fail for a
            recognizable reason, such as generalizing, asking a defensive
            ‘why,’ or closing the conversation too early. That is where an
            interaction stops being a quiz and starts becoming instruction.
          </p>
          <p>
            A successful conversion does more than fit existing content onto a
            screen. It gives learners a better way to understand, practice, and
            use the skill.
          </p>
        </header>

        <div className="sticky-notes" role="list">
          {NOTES.map((note) => (
            <article
              className={`sticky-note sticky-note--${note.tone}`}
              key={note.id}
              role="listitem"
            >
              <header className="sticky-note__bar">
                <span className="sticky-note__label">{note.label}</span>
              </header>
              <h3 className="sticky-note__title">{note.title}</h3>
              {note.lead ? <p className="sticky-note__lead">{note.lead}</p> : null}
              <ul className="sticky-note__list">
                {note.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
