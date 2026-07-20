import DecisionFigure, { mediaFromFile } from './DecisionFigure'

const REDESIGN_THEMES = [
  {
    id: 'access',
    label: 'Access',
    before: [
      'Two-hour scheduled session',
      'Presenter-controlled pace',
      'Repeated for every cohort',
    ],
    after: [
      '30-minute, on-demand module',
      'Self-paced and resumable',
      'Available consistently across cohorts and time zones',
    ],
  },
  {
    id: 'learning',
    label: 'Learning experience',
    before: [
      'Dense explanatory slides',
      'Watching frameworks being presented',
      'Few opportunities to make decisions or practice',
    ],
    after: [
      'Progressive, single-focus screens',
      'Guided examples followed by active practice',
      'Decisions, specific feedback, and opportunities to try again',
    ],
  },
  {
    id: 'transfer',
    label: 'Workplace transfer',
    before: [
      'Few resources after the workshop',
      'Learning ends when the session ends',
    ],
    after: [
      'Downloadable framework cards',
      'Reusable support for real coaching conversations',
    ],
  },
]

const DECISIONS = [
  {
    number: '01',
    title: 'Progressive framework reveal',
    lead: 'The original workshop presented each framework and its guidance all at once. The redesign reveals one step at a time, pairing focused guidance with a conversation that develops as the learner advances.',
    outcome:
      'Learners see how a coaching framework becomes a conversation—not just a set of labels to memorize.',
    figures: [
      {
        type: 'stack',
        beforeLead: 'Everything appeared at once.',
        beforeBody:
          'The original slide showed all five OSCAR components simultaneously, leaving learners to identify the structure themselves. The redesign focuses attention on one step at a time. Guidance appears in context as learners explore each step.',
        before: mediaFromFile('before-oscar-slide.png', {
          label: 'Original OSCAR slide',
          alt: 'Original instructor-led OSCAR diagram slide showing every step at once',
        }),
        after: mediaFromFile('after-oscar-meet.mov', {
          label: 'OSCAR interactive reveal',
          alt: 'Redesigned eLearning OSCAR step reveal, one component at a time',
        }),
      },
      {
        type: 'stack',
        beforeLead: 'The example arrived fully formed.',
        beforeBody:
          'The original slide placed guidance and a complete conversation on one screen, making it difficult to connect each line to a step. The redesign builds the conversation progressively. Each coaching move is added at the moment its framework step is introduced.',
        before: mediaFromFile('before-oscar-example.png', {
          label: 'Original OSCAR example slide',
          alt: 'Original instructor-led slide with a wall of OSCAR example dialogue',
        }),
        after: mediaFromFile('after-oscar-stepthrough.mov', {
          label: 'OSCAR step-through conversation',
          alt: 'Redesigned eLearning OSCAR conversation building line by line',
        }),
      },
      {
        type: 'stack',
        beforeLead: 'Four stages competed for attention.',
        beforeBody:
          'The source slide presented every GROW stage, prompt, and example together. The redesign uses the same progressive pattern so learners focus on one stage at a time. Reusing the interaction pattern makes both frameworks easier to navigate.',
        before: mediaFromFile('before-grow-slide.png', {
          label: 'Original GROW slide',
          alt: 'Original instructor-led GROW diagram slide',
        }),
        after: mediaFromFile('after-grow-meet.png', {
          label: 'GROW interactive reveal',
          alt: 'Redesigned eLearning GROW step reveal using the same pattern as OSCAR',
        }),
      },
    ],
  },
  {
    number: '02',
    title: 'Practice that judges decisions',
    lead: 'The original workshop showed coaching examples but never asked managers to make the conversation decisions themselves. The redesign adds guided practice in OSCAR and GROW: learners choose what they would say, receive specific feedback, and retry choices that miss the mark.',
    outcome:
      'The practice applies conversational judgment and turns weak choices into instruction.',
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
    lead: 'The original workshop asked managers to read situations and scan long question lists. The redesign separates the two: required practice based on real situations, while reference content becomes optional support learners can revisit during real coaching conversations.',
    outcome:
      'Learners practice during the module and leave with support for the next real conversation.',
    figures: [
      {
        type: 'stack',
        beforeLead: 'From reading situations to making a coaching decision',
        beforeBody:
          'The original slide listed common coaching situations. The redesign asks learners to choose a realistic case, select an appropriate approach, write an opening line, and compare it with a model response.',
        before: mediaFromFile('before-situations-slide.png', {
          label: 'Original typical-situations slide',
          alt: 'Original instructor-led slide listing typical coaching situations',
        }),
        after: {
          ...mediaFromFile('after-situations-practice.mov', {
            label: 'Real-situations practice',
            alt: 'Redesigned eLearning activity where the learner chooses a situation and writes an opening question',
          }),
          src: '/images/after-situations-practice.mov?v=20260719',
        },
      },
      {
        type: 'stack',
        beforeLead: 'From question lists to optional exploration',
        beforeBody:
          'The original deck placed dozens of sample questions directly in the presentation. The redesign keeps them available without slowing the required learning path.',
        before: mediaFromFile('before-reference-content.png', {
          label: 'Original question-list slides',
          alt: 'Original instructor-led slides listing dozens of coaching questions',
        }),
        after: mediaFromFile('after-reference-popups.mov', {
          label: 'Optional reference pop-ups',
          alt: 'Redesigned eLearning optional pop-up exploration of coaching question types',
        }),
      },
      {
        type: 'stack',
        beforeLead: 'From course content to workplace support',
        beforeBody:
          'The OSCAR, questioning, and GROW references become downloadable cards managers can use during real coaching moments.',
        after: mediaFromFile('after-coaching-cards.mov', {
          label: 'Downloadable coaching cards',
          alt: 'Downloadable OSCAR, questioning, and GROW coaching job-aid cards',
        }),
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
          <h2 id="decisions-title">
            Turning passive slides into{' '}
            <strong className="insight-emphasis">practice</strong>.
          </h2>
          <p>
            The redesign preserved the original coaching content while changing
            how managers access, practice, and apply it.
          </p>
        </header>

        <div className="redesign-themes">
          {REDESIGN_THEMES.map((theme) => (
            <div className="redesign-theme" key={theme.id}>
              <p className="section-title redesign-theme__label">
                {theme.label}
              </p>
              <div
                className="compare"
                role="group"
                aria-label={`${theme.label}: before and after`}
              >
                <div className="compare__col compare__col--before">
                  <h3>
                    <span className="ba-marker">Before</span>
                  </h3>
                  <ul className="plain-list">
                    {theme.before.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="compare__col compare__col--after">
                  <h3>
                    <span className="ba-marker ba-marker--after">After</span>
                  </h3>
                  <ul className="plain-list">
                    {theme.after.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="callout callout--quiet" role="note">
          <strong>Same substance, redesigned experience.</strong> The shorter
          format comes from removing live-session logistics and repetition—not
          from removing the core learning.
        </p>

        <p className="redesign-bridge">
          The following three decisions show where that strategy made the
          greatest difference.
        </p>

        <div className="decisions">
          {DECISIONS.map((d) => (
            <article
              className={`decision decision--stack${
                d.figures.every((f) => f.type === 'single')
                  ? ' decision--singles'
                  : ''
              }`}
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
                {d.figures.map((figure, index) => (
                  <DecisionFigure
                    key={figure.beforeLead || figure.caption || figure.media?.src || index}
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
