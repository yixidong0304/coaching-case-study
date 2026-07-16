import { IMAGES } from '../config'
import ScreenshotImage from './ScreenshotImage'

const DECISIONS = [
  {
    number: '01',
    title: 'Progressive OSCAR demonstration',
    before:
      'The original workshop presented the OSCAR framework through dense explanatory slides.',
    designMove:
      'The asynchronous course reveals one component at a time—Observation, Specific, Consequences, Actions, and Results. The interface shows instructional guidance on one side and a worked manager-to-employee conversation on the other. The example accumulates line by line as the learner progresses.',
    why: [
      'Manages cognitive load',
      'Connects an abstract framework to an observable conversation',
      'Supports backward and forward review',
      'Demonstrates performance before practice',
    ],
    outcome:
      'Learners see how a full coaching conversation develops instead of memorizing isolated labels.',
    image: IMAGES.decisions[0],
  },
  {
    number: '02',
    title: 'Branching OSCAR practice',
    before:
      'A conventional knowledge check could test whether learners remembered what OSCAR stood for, but not whether they could use it during a difficult conversation.',
    situation:
      'Sam is a capable employee whose weekly status report has arrived late and without required revenue figures three times. The manager needs to address the pattern without turning the conversation into blame or reprimand.',
    practiceStructure: [
      'Open with an observation.',
      'Surface the consequences.',
      'Invite Sam to identify an action.',
      'Connect the action to a future result.',
    ],
    designMove:
      'The learner makes four decisions across a multi-turn scenario. Every selection receives specific explanatory feedback.',
    feedbackTypes: [
      'Generalization',
      'Judgment',
      'Defensive “why” wording',
      'Telling instead of asking',
      'Premature closure',
      'Missing commitment',
    ],
    feedbackNote:
      'Weak choices return the learner to the decision rather than ending the activity.',
    why: [
      'Assesses application, not acronym recall',
      'Uses a plausible management situation',
      'Treats wrong answers as teaching opportunities',
      'Rehearses the conversational judgment managers need at work',
    ],
    outcome:
      'The activity rehearses the conversational judgment managers need at work.',
    image: IMAGES.decisions[1],
  },
  {
    number: '03',
    title: 'Performance support',
    before:
      'The original live session ended when the workshop ended. Managers had limited support when a real coaching conversation occurred later.',
    designMove:
      'The redesigned experience provides three downloadable cards—OSCAR, powerful-question types, and GROW. Each card condenses the framework into a practical workplace reference. The module introduces each tool, gives learners practice using it, and then provides a compact reference they can keep.',
    why: [
      'Reduce dependence on memory',
      'Support use at the moment of need',
      'Extend learning beyond course completion',
      'Connect training to workplace performance',
    ],
    outcome:
      'The course becomes both a learning experience and a reusable performance-support resource.',
    image: IMAGES.decisions[2],
  },
]

export default function DesignDecisions({ onImageClick }) {
  return (
    <section
      id="design-decisions"
      className="section section--emphasis"
      aria-labelledby="decisions-title"
    >
      <div className="container">
        <header className="section-header section-header--readable">
          <p className="eyebrow">Interaction &amp; transfer design</p>
          <h2 id="decisions-title">
            Three decisions that transformed the learning experience
          </h2>
          <p>
            Once the introductory sequence was reorganized, three deeper design
            moves shaped how learners practice OSCAR, receive feedback, and take
            support back to the workplace.
          </p>
        </header>

        <div className="decisions">
          {DECISIONS.map((d, i) => (
            <article
              className={`decision${i % 2 === 1 ? ' decision--alt' : ''}`}
              key={d.number}
              aria-labelledby={`decision-${d.number}-title`}
            >
              <div className="decision__copy">
                <p className="decision__num">Decision {d.number}</p>
                <h3 id={`decision-${d.number}-title`}>{d.title}</h3>

                <div className="decision__block">
                  <h4>Before</h4>
                  <p>{d.before}</p>
                </div>

                {d.situation && (
                  <div className="decision__block">
                    <h4>Situation</h4>
                    <p>{d.situation}</p>
                  </div>
                )}

                {d.practiceStructure && (
                  <div className="decision__block">
                    <h4>Practice structure</h4>
                    <p>The learner makes four decisions:</p>
                    <ol className="numbered-list">
                      {d.practiceStructure.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  </div>
                )}

                <div className="decision__block">
                  <h4>Design move</h4>
                  <p>{d.designMove}</p>
                  {d.feedbackTypes && (
                    <>
                      <p className="decision__feedback-label">
                        Examples of weak-choice feedback identify:
                      </p>
                      <ul className="plain-list">
                        {d.feedbackTypes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      {d.feedbackNote && <p>{d.feedbackNote}</p>}
                    </>
                  )}
                </div>

                <div className="decision__block">
                  <h4>Why it supports learning</h4>
                  <ul className="plain-list">
                    {d.why.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <p className="decision__outcome">{d.outcome}</p>
              </div>

              <div className="decision__visual">
                <ScreenshotImage {...d.image} onClick={onImageClick} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
