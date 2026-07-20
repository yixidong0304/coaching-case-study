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
            Coming from UX, I was already comfortable organizing complex
            information and prototyping interactions. What this project taught
            me most is organizing content through an instructional design
            lens: start from a performance need, write measurable objectives,
            and align every practice activity and piece of feedback to those
            objectives before touching the interface.
          </p>
          <p>
            The most challenging and instructive part was the feedback design.
            In the Sam practice, each weak answer had to fail for a specific,
            recognizable reason a manager would know from their own
            conversations, such as generalizing, asking a defensive "why,"
            or closing the discussion too early. Writing feedback at that level
            is what separates a quiz from actual instruction.
          </p>
          <p>
            Fitting existing content onto a screen is the easy part. The real
            work is giving learners a genuinely better way to understand a
            skill, practice it, and use it when it matters.
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
