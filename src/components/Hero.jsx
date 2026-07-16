import { COURSE_URL, IMAGES } from '../config'
import ScreenshotImage from './ScreenshotImage'

const META = [
  { label: 'Course', value: 'Coaching Skills for Managers' },
  {
    label: 'Project type',
    value:
      'Instructor-led training to self-paced asynchronous eLearning conversion',
  },
  {
    label: 'Role',
    value: 'Instructional designer and prototype developer',
  },
  { label: 'Audience', value: 'New and mid-level managers' },
  {
    label: 'Original format',
    value: 'Two-hour virtual instructor-led workshop',
  },
  {
    label: 'Redesigned format',
    value: 'Approximately 15-minute responsive self-paced module',
  },
]

const FRAMEWORKS = [
  'Coaching versus directing',
  'OSCAR for feedback conversations',
  'Listening, powerful questions, and GROW',
]

export default function Hero({ onImageClick }) {
  return (
    <section id="top" className="hero section" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">Instructional Design Case Study</p>
          <h1 id="hero-title">From Instructor-Led to Self-Paced</h1>
          <p className="lede">
            Redesigning a two-hour leadership workshop as a 15-minute,
            practice-based asynchronous learning experience.
          </p>
          <p className="hero__desc">
            Coaching Skills for Managers was originally delivered as a live,
            facilitator-led corporate workshop. It introduced managers to three
            central areas. The redesign preserves the substance of those
            frameworks but changes how managers encounter and practice them.
          </p>

          <ul className="hero__frameworks">
            {FRAMEWORKS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="hero__desc">
            The goal was not to put a workshop online. It was to transform a
            two-hour presentation into a concise learning experience that
            managers could complete on demand, practice through realistic
            decisions, and revisit when real conversations happened.
          </p>

          <dl className="meta-list">
            {META.map((item) => (
              <div className="meta-list__item" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <p className="hero__note">
            All source branding, company names, and internal references are
            anonymized.
          </p>

          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href={COURSE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Experience the course
            </a>
            <a className="btn btn--ghost" href="#overview">
              Explore the design process
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <ScreenshotImage
            {...IMAGES.hero}
            onClick={onImageClick}
            className="hero__shot"
          />
        </div>
      </div>
    </section>
  )
}
