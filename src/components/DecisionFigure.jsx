import ScreenshotImage from './ScreenshotImage'
import VideoFigure, { isVideoFilename } from './VideoFigure'

/** Build a media descriptor from a public/images filename. */
export function mediaFromFile(filename, { label, alt, dimensions = '1280 × 800' } = {}) {
  return {
    src: `/images/${filename}`,
    filename,
    label: label || filename,
    alt: alt || label || filename,
    dimensions,
  }
}

function MediaSlot({ media, tag, fullWidth = false }) {
  const video = isVideoFilename(media.filename)
  const isAfter = tag === 'After'
  return (
    <div
      className={`decision-figure__slot${
        tag
          ? isAfter
            ? ' decision-figure__slot--after'
            : ' decision-figure__slot--before'
          : ''
      }${fullWidth ? ' decision-figure__slot--full' : ''}`}
    >
      {tag ? (
        <span className={`ba-marker${isAfter ? ' ba-marker--after' : ''}`}>
          {tag}
        </span>
      ) : null}
      {video ? (
        <VideoFigure {...media} />
      ) : (
        <ScreenshotImage {...media} />
      )}
    </div>
  )
}

/**
 * Renders a SINGLE media figure, a BEFORE/AFTER PAIR, or a 30/70
 * transform comparison (diagnosis + before image | after media).
 */
export default function DecisionFigure({ figure }) {
  if (figure.type === 'stack') {
    const hasBefore = Boolean(figure.before)

    return (
      <figure
        className={`decision-figure decision-figure--stack${
          hasBefore ? '' : ' decision-figure--stack-text'
        }`}
      >
        <div className="decision-figure__split">
          <div className="decision-figure__col decision-figure__col--before">
            <div className="decision-figure__diagnosis">
              <p className="decision-figure__diagnosis-lead">
                {figure.beforeLead}
              </p>
              <p className="decision-figure__diagnosis-body">
                {figure.beforeBody}
              </p>
            </div>
            {hasBefore ? (
              <div className="decision-figure__slot decision-figure__slot--before">
                <span className="ba-marker">Before</span>
                <ScreenshotImage {...figure.before} />
              </div>
            ) : null}
          </div>

          <div className="decision-figure__col decision-figure__col--after">
            <MediaSlot
              media={figure.after || figure.media}
              tag="After"
              fullWidth
            />
          </div>
        </div>
      </figure>
    )
  }

  const isPair = figure.type === 'pair'

  return (
    <figure className={`decision-figure${isPair ? ' decision-figure--pair' : ''}`}>
      {isPair ? (
        <div className="decision-figure__pair" role="group" aria-label={figure.caption}>
          <MediaSlot media={figure.before} tag="Before" />
          <MediaSlot media={figure.after} tag="After" />
        </div>
      ) : (
        <MediaSlot media={figure.media} />
      )}
      {figure.caption ? (
        <figcaption className="decision-figure__caption">{figure.caption}</figcaption>
      ) : null}
    </figure>
  )
}
