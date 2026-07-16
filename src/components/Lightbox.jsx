import { useEffect, useRef } from 'react'
import ScreenshotImage from './ScreenshotImage'

export default function Lightbox({ image, onClose }) {
  const closeRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    previouslyFocused.current = document.activeElement
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previouslyFocused.current?.focus?.()
    }
  }, [onClose])

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt || image.label}
      onClick={onClose}
    >
      <div
        className="lightbox__panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="lightbox__close"
          onClick={onClose}
          aria-label="Close image preview"
        >
          Close
        </button>
        <ScreenshotImage {...image} />
        {image.caption || image.label ? (
          <p className="lightbox__caption">{image.caption || image.label}</p>
        ) : null}
      </div>
    </div>
  )
}
