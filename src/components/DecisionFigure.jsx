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

function MediaSlot({ media, tag }) {
  const video = isVideoFilename(media.filename)
  const isAfter = tag === 'After'
  return (
    <div
      className={`decision-figure__slot${
        tag ? (isAfter ? ' decision-figure__slot--after' : ' decision-figure__slot--before') : ''
      }`}
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
 * Renders a SINGLE media figure or a BEFORE/AFTER PAIR with caption.
 */
export default function DecisionFigure({ figure }) {
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
      <figcaption className="decision-figure__caption">{figure.caption}</figcaption>
    </figure>
  )
}
