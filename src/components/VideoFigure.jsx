import { useState } from 'react'

const VIDEO_EXT = /\.(mov|mp4)$/i

export function isVideoFilename(filename = '') {
  return VIDEO_EXT.test(filename)
}

/**
 * Autoplaying muted loop video with the same frame treatment as screenshots.
 * Missing files show a polished placeholder.
 */
export default function VideoFigure({
  src,
  filename,
  label,
  alt,
  dimensions = '1280 × 800',
  className = '',
  aspect = '16 / 10',
}) {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = failed || !src

  if (showPlaceholder) {
    return (
      <div className={`screenshot-wrap ${className}`.trim()}>
        <div
          className="placeholder-frame"
          style={{ aspectRatio: aspect }}
          role="img"
          aria-label={`${alt || label}. Placeholder: add ${filename} (${dimensions}).`}
        >
          <span className="placeholder-frame__icon" aria-hidden="true" />
          <span className="placeholder-frame__label">{label}</span>
          <span className="placeholder-frame__meta">
            <code>{filename}</code>
            <span aria-hidden="true"> · </span>
            <span>{dimensions}</span>
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={`screenshot-wrap ${className}`.trim()}>
      <video
        className="screenshot-video"
        style={{ aspectRatio: aspect }}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-label={alt || label}
        onError={() => setFailed(true)}
      />
    </div>
  )
}
