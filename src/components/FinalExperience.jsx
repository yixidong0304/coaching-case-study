import { IMAGES } from '../config'
import ScreenshotImage from './ScreenshotImage'

export default function FinalExperience({ onImageClick }) {
  return (
    <section
      id="final-experience"
      className="section section--tint"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <header className="section-header section-header--readable">
          <h2 id="experience-title">The prototype learning experience</h2>
          <p>
            The responsive prototype combines concise explanation, progressive
            examples, realistic practice, tailored feedback, and downloadable
            tools in one self-paced module.
          </p>
        </header>

        <ul className="gallery">
          {IMAGES.gallery.map((item) => (
            <li className="gallery__item" key={item.id}>
              <ScreenshotImage
                {...item}
                label={item.caption}
                onClick={onImageClick}
              />
              <p className="gallery__caption">{item.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
