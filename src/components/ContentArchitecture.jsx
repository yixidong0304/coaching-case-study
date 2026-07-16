import { IMAGES } from '../config'
import ScreenshotImage from './ScreenshotImage'

const ORIGINAL = [
  {
    title: 'What is coaching?',
    body: 'Several quotations introduced coaching as asking rather than telling.',
  },
  {
    title: 'Coaching in practice',
    body: 'Safety, quality, and standards remained non-negotiable.',
  },
  {
    title: 'Instruction versus coaching',
    body: 'The deck contrasted direct instruction with coaching questions.',
  },
  {
    title: 'Coaching attitude',
    body: 'A long list described curiosity, listening, neutrality, challenge, and growth mindset.',
  },
  {
    title: 'Manager versus coach',
    body: 'A leader was shown as balancing responsibility for work with responsibility for people.',
  },
]

const REDESIGNED = [
  {
    title: 'Define the concept and its boundaries',
    body: '“What coaching is—and isn’t” combines the core definition with the limits of coaching, including standards and clear decisions.',
  },
  {
    title: 'Show what the difference sounds like',
    body: '“Two ways to respond” compares directing with coaching while clarifying that both approaches have a valid place.',
  },
  {
    title: 'Integrate both modes into leadership',
    body: '“Same leader, two modes” explains that coaching does not replace managing; strong leaders shift deliberately between execution and development.',
  },
  {
    title: 'Ask learners to make a decision',
    body: 'A two-item knowledge check asks learners to identify coaching versus directing and recognize when direction is the correct response.',
  },
]

const PRACTICE_POINTS = [
  'Learners classify a realistic management response.',
  'Feedback explains why each option is or is not appropriate.',
  'The second item reinforces that directing is the right choice during a safety or emergency situation.',
]

export default function ContentArchitecture({ onImageClick }) {
  const { sourceSlides, redesignedFlow, knowledgeCheck } =
    IMAGES.contentArchitecture

  return (
    <section
      id="content-architecture"
      className="section"
      aria-labelledby="architecture-title"
    >
      <div className="container">
        <header className="section-header section-header--readable">
          <p className="eyebrow">Content architecture</p>
          <h2 id="architecture-title">From slide sequence to learning flow</h2>
          <p>
            The source deck contained several related slides on the definition of
            coaching, coaching attitude, operational constraints, directing, and
            the manager-versus-coach distinction. In a live session, a facilitator
            could connect these ideas verbally. In a self-paced course, those
            connections had to be built into the structure, wording, interaction,
            and feedback.
          </p>
        </header>

        <div
          className="arch-compare"
          role="group"
          aria-label="Original instructor-led sequence compared with redesigned asynchronous sequence"
        >
          <div className="arch-col arch-col--source">
            <p className="arch-col__label">Original instructor-led sequence</p>
            <div className="arch-col__media arch-col__media--secondary">
              <ScreenshotImage
                {...sourceSlides}
                onClick={onImageClick}
                aspect="16 / 9"
              />
              <p className="arch-badge">{sourceSlides.badge}</p>
            </div>
            <ol className="arch-list">
              {ORIGINAL.map((item, i) => (
                <li key={item.title}>
                  <span className="arch-list__num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="arch-caption">
              These slides worked with a facilitator, but several ideas overlapped
              and relied on spoken explanation to connect them.
            </p>
          </div>

          <div className="arch-col arch-col--redesign" aria-label="Redesigned sequence">
            <p className="arch-col__label arch-col__label--accent">
              Redesigned asynchronous sequence
            </p>
            <div className="arch-col__media">
              <ScreenshotImage
                {...redesignedFlow}
                onClick={onImageClick}
                aspect="16 / 10"
              />
            </div>
            <ol className="arch-flow">
              {REDESIGNED.map((item, i) => (
                <li key={item.title}>
                  <span className="arch-flow__num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="arch-caption">
              I removed repetition, preserved the safety and standards boundary,
              and added immediate decision practice where the live facilitator had
              previously carried the learning.
            </p>
          </div>
        </div>

        <p className="callout" role="note">
          The goal was not simply to shorten the content. It was to preserve its
          instructional purpose while making the logic visible without a
          facilitator.
        </p>

        <div className="arch-practice">
          <div className="arch-practice__copy">
            <h3>From explanation to immediate practice</h3>
            <p>
              In the live workshop, the facilitator could ask the group whether an
              example represented coaching or directing. In the self-paced version,
              I converted that discussion into a two-item decision check with
              explanatory feedback.
            </p>
            <ul className="plain-list">
              {PRACTICE_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="arch-practice__close">
              This short interaction checks the first learning objective without
              over-testing an introductory section.
            </p>
          </div>
          <div className="arch-practice__media">
            <ScreenshotImage
              {...knowledgeCheck}
              onClick={onImageClick}
              aspect="16 / 11"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
