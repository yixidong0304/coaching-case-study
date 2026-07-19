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

export default function Reflection() {
  return (
    <section id="reflection" className="section" aria-labelledby="reflection-title">
      <div className="container">
        <header className="section-header section-header--readable">
          <h2 id="reflection-title">What this project taught me</h2>
          <p>
            My UX background helped me organize complex information, prototype
            interactions, and design a clear interface.
          </p>
          <p>
            This project required me to go further: begin with a performance need,
            define observable learning outcomes, align practice with those
            outcomes, and write feedback that actively teaches.
          </p>
          <p>
            The sharpest lesson was in feedback design. Writing a wrong answer is
            easy; writing feedback that turns a wrong choice into a moment of
            learning is the craft. In the Sam scenario, each weak option had to
            fail for a specific, nameable reason a manager would recognize from
            their own conversations: a generalization, a defensive ‘why,’ a
            premature close. That is where content layout becomes teaching.
          </p>
          <p>
            An eLearning conversion is not successful because the original content
            fits on a screen. It is successful when the new format provides a
            better way for learners to understand, practice, and use the skill.
          </p>
        </header>
      </div>

      <div className="container">
        <h3 className="storyboard-list-title">Where the project stands</h3>
        <div className="two-col">
          <div className="two-col__panel">
            <h3>Completed</h3>
            <ul className="plain-list">
              {COMPLETED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="two-col__panel">
            <h3>Requires a real organization</h3>
            <ul className="plain-list">
              {REQUIRES_ORG.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="next-steps">
          <h3>What I’d do next</h3>
          <p>
            The next moves are the production steps a real engagement adds:
          </p>
          <ul className="plain-list">
            {NEXT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
