import { IMAGES } from '../config'
import ScreenshotImage from './ScreenshotImage'

const DOCUMENTED = [
  'Screen purpose',
  'Text hierarchy',
  'Learner-facing copy',
  'Interaction behavior',
  'Scenario choices',
  'Correct feedback',
  'Incorrect feedback',
  'Branching logic',
  'Media direction',
  'Asset dependencies',
  'Instructional rationale',
  'Development fallback decisions',
]

export default function Storyboard({ onImageClick }) {
  return (
    <section className="section" aria-labelledby="storyboard-title">
      <div className="container">
        <header className="section-header section-header--readable">
          <h2 id="storyboard-title">Designing beyond the visible interface</h2>
          <p>
            Before development, the course was authored as a screen-level
            storyboard.
          </p>
        </header>

        <div className="storyboard-layout">
          <div>
            <h3 className="storyboard-list-title">The storyboard documented:</h3>
            <ul className="document-list">
              {DOCUMENTED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <blockquote className="pull-quote">
              <p>
                The storyboard functions as the handoff contract between the
                intended learning experience and its technical implementation.
              </p>
            </blockquote>
          </div>

          <ScreenshotImage {...IMAGES.storyboard} onClick={onImageClick} />
        </div>
      </div>
    </section>
  )
}
