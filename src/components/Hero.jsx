import { COURSE_URL, REPORT_URL, IMAGES } from '../config'
import ScreenshotImage from './ScreenshotImage'

const TAGS = [
  '10 min read',
  'ILT → eLearning Conversion',
  'Instructional Design',
]

const OVERVIEW = [
  { label: 'Time', value: 'July 2026' },
  {
    label: 'Role',
    value: 'Instructional design + interactive eLearning development',
  },
  {
    label: 'Tools',
    value: 'Figma, Codex, Cursor, Microsoft 365',
  },
]

export default function Hero() {
  return (
    <section id="top" className="hero section" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="section-title">Coaching Skills for Managers</p>
          <h1 id="hero-title">From a 2-Hour Workshop to a 30-Minute Course</h1>
          <p className="lede">
            Transforming an instructor-led workshop into a self-paced eLearning
            course with interactive practice, realistic scenarios, and practical
            coaching tools for everyday conversations.
          </p>

          <ul className="hero__tags" aria-label="Project tags">
            {TAGS.map((tag) => (
              <li key={tag}>
                <span className="hero__chip">{tag}</span>
              </li>
            ))}
          </ul>

          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href={COURSE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              View course
            </a>
            <a
              className="btn btn--ghost"
              href={REPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the report
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <ScreenshotImage
            {...IMAGES.hero}
            aspect="1600 / 833"
            className="hero__shot"
          />

          <dl className="meta-list hero__overview">
            {OVERVIEW.map((item) => (
              <div className="meta-list__item" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
