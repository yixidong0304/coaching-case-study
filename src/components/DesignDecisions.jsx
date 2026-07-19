import DecisionFigure, { mediaFromFile } from './DecisionFigure'

const BEFORE = [
  'Watched frameworks explained',
  'Dense explanatory slides',
  'Presenter-controlled pace',
  'Facilitator-dependent experience',
  'Few post-session resources',
]

const AFTER = [
  'Practices frameworks through decisions',
  'Progressive, single-focus screens',
  'Learner-controlled and resumable',
  'Standardized experience',
  'Downloadable job aids',
]

const DECISIONS = [
  {
    number: '01',
    title: 'Progressive framework reveal',
    lead: 'The original deck taught OSCAR and GROW as dense single slides, every step and all its guidance at once, and demonstrated OSCAR through a wall of example dialogue. The redesign rebuilds both as interactive reveals: one component at a time, guidance on demand, and a worked example that accumulates line by line instead of arriving all at once.',
    outcome:
      'Learners watch a coaching conversation develop instead of memorizing five isolated labels.',
    figures: [
      {
        type: 'pair',
        before: mediaFromFile('before-oscar-slide.png', {
          label: 'Original OSCAR slide',
          alt: 'Original instructor-led OSCAR diagram slide showing every step at once',
        }),
        after: mediaFromFile('after-oscar-meet.mov', {
          label: 'OSCAR interactive reveal',
          alt: 'Redesigned eLearning OSCAR step reveal, one component at a time',
        }),
        caption:
          'Reads a completed diagram → explores each OSCAR step on demand',
      },
      {
        type: 'pair',
        before: mediaFromFile('before-oscar-example.png', {
          label: 'Original OSCAR example slide',
          alt: 'Original instructor-led slide with a wall of OSCAR example dialogue',
        }),
        after: mediaFromFile('after-oscar-stepthrough.mov', {
          label: 'OSCAR step-through conversation',
          alt: 'Redesigned eLearning OSCAR conversation building line by line',
        }),
        caption:
          'A wall of example dialogue on one slide → the same conversation, revealed line by line as the learner advances',
      },
      {
        type: 'pair',
        before: mediaFromFile('before-grow-slide.png', {
          label: 'Original GROW slide',
          alt: 'Original instructor-led GROW diagram slide',
        }),
        after: mediaFromFile('after-grow-meet.png', {
          label: 'GROW interactive reveal',
          alt: 'Redesigned eLearning GROW step reveal using the same pattern as OSCAR',
        }),
        caption:
          'The same reveal pattern applied to GROW: one design system, two frameworks',
      },
    ],
  },
  {
    number: '02',
    title: 'Practice that judges decisions',
    lead: 'The original workshop had no equivalent to this: managers watched examples but never made a coaching decision themselves. Both frameworks now include a branching practice: coaching Sam with OSCAR and Priya with GROW. At every turn the learner chooses what they’d actually say, and every choice is judged with specific feedback. A weak option is named for exactly why it fails (a generalization, a defensive ‘why,’ a premature close) and loops back to try again.',
    outcome:
      'The activity assesses conversational judgment, not acronym recall, and wrong answers teach.',
    figures: [
      {
        type: 'single',
        media: mediaFromFile('after-sam-feedback.mov', {
          label: 'Sam OSCAR feedback',
          alt: 'Redesigned OSCAR branching practice showing explanatory feedback on a weak coaching choice',
        }),
        caption:
          'Coaching Sam with OSCAR: every choice is named for why it works or fails',
      },
      {
        type: 'single',
        media: mediaFromFile('after-grow-feedback.mov', {
          label: 'Priya GROW feedback',
          alt: 'Redesigned GROW branching practice showing explanatory feedback on every selection',
        }),
        caption:
          'The same feedback discipline in the GROW conversation with Priya',
      },
    ],
  },
  {
    number: '03',
    title: 'From passive reference to application and support',
    lead: 'The original closed with a ‘typical situations’ slide managers read and slides that listed dozens of questions to scan in class. The redesign moves in both directions: application moves IN (a real-situations activity where the learner picks a scenario, chooses the right framework, writes their own opening line, and compares it to a model), while reference moves OUT of the required flow, into optional pop-ups and downloadable cards managers keep.',
    outcome:
      'The course ends as both rehearsal and a reusable toolkit, honoring its own ‘coaching in minutes’ promise.',
    figures: [
      {
        type: 'pair',
        before: mediaFromFile('before-situations-slide.png', {
          label: 'Original typical-situations slide',
          alt: 'Original instructor-led slide listing typical coaching situations',
        }),
        after: mediaFromFile('after-situations-practice.mov', {
          label: 'Real-situations practice',
          alt: 'Redesigned eLearning activity where the learner chooses a situation and writes an opening question',
        }),
        caption:
          'Reads a list of typical situations → chooses one, writes an opening question, and compares it to a model',
      },
      {
        type: 'pair',
        before: mediaFromFile('before-reference-content.png', {
          label: 'Original question-list slides',
          alt: 'Original instructor-led slides listing dozens of coaching questions',
        }),
        after: mediaFromFile('after-reference-popups.mov', {
          label: 'Optional reference pop-ups',
          alt: 'Redesigned eLearning optional pop-up exploration of coaching question types',
        }),
        caption:
          'Question lists dumped on slides → optional pop-up exploration, kept out of the required path',
      },
      {
        type: 'single',
        media: mediaFromFile('after-coaching-cards.mov', {
          label: 'Downloadable coaching cards',
          alt: 'Downloadable OSCAR, questioning, and GROW coaching job-aid cards',
        }),
        caption:
          'The reference content’s final form: downloadable cards for the moment of need',
      },
    ],
  },
]

export default function DesignDecisions() {
  return (
    <section
      id="redesign"
      className="section section--emphasis"
      aria-labelledby="decisions-title"
    >
      <div className="container">
        <header className="section-header section-header--readable">
          <p className="section-title">The Redesign</p>
          <h2 id="decisions-title">Turning passive slides into practice</h2>
          <p>
            The conversion answered each limitation of the live format, then
            three deeper design moves shaped how managers actually practice.
          </p>
        </header>

        <div
          className="compare"
          role="group"
          aria-label="Before and after comparison"
        >
          <div className="compare__col compare__col--before">
            <h3>
              <span className="ba-marker">Before</span>
              Instructor-led workshop
            </h3>
            <ul className="plain-list">
              {BEFORE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="compare__col compare__col--after">
            <h3>
              <span className="ba-marker ba-marker--after">After</span>
              Asynchronous redesign
            </h3>
            <ul className="plain-list">
              {AFTER.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="callout callout--quiet" role="note">
          The redesigned course is shorter because presentation time and
          repetition were removed, not because the learning substance was
          removed.
        </p>

        <div className="decisions">
          {DECISIONS.map((d) => (
            <article
              className="decision decision--stack"
              key={d.number}
              aria-labelledby={`decision-${d.number}-title`}
            >
              <header className="decision__header">
                <p className="subtitle">Decision {d.number}</p>
                <h3 id={`decision-${d.number}-title`} className="decision__title-text">
                  {d.title}
                </h3>
                <p className="decision__lead">{d.lead}</p>
                <p
                  className="banner banner--redesign decision__outcome-banner"
                  role="note"
                >
                  {d.outcome}
                </p>
              </header>

              <div className="decision__figures">
                {d.figures.map((figure) => (
                  <DecisionFigure
                    key={figure.caption}
                    figure={figure}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
