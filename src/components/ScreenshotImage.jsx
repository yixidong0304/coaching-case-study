import { useState } from 'react'

/**
 * Displays a course screenshot when the file exists in /public/images/.
 * When missing, shows a polished placeholder with filename and dimensions.
 */
export default function ScreenshotImage({
  src,
  alt,
  label,
  filename,
  dimensions,
  className = '',
  onClick,
  aspect = '16 / 10',
}) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const showPlaceholder = failed || !src
  const isInteractive = Boolean(onClick) && !showPlaceholder

  const content = showPlaceholder ? (
    <div
      className="placeholder-frame"
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={`${alt}. Placeholder — add ${filename} (${dimensions}).`}
    >
      <span className="placeholder-frame__icon" aria-hidden="true" />
      <span className="placeholder-frame__label">{label}</span>
      <span className="placeholder-frame__meta">
        <code>{filename}</code>
        <span aria-hidden="true"> · </span>
        <span>{dimensions}</span>
      </span>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={`screenshot-img${loaded ? ' is-loaded' : ''}`}
      style={{ aspectRatio: aspect }}
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
    />
  )

  if (isInteractive) {
    return (
      <button
        type="button"
        className={`screenshot-button ${className}`.trim()}
        onClick={() => onClick({ src, alt, label, filename, dimensions })}
        aria-label={`Enlarge: ${alt}`}
      >
        {content}
        <span className="screenshot-button__hint">View larger</span>
      </button>
    )
  }

  return <div className={`screenshot-wrap ${className}`.trim()}>{content}</div>
}
