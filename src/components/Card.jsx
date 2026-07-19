/**
 * Shared Card — default surface for content blocks across the case study.
 * Styles live in src/styles/index.css (.card + card design tokens).
 * Prefer adding className="card" for new surfaces; existing panels also
 * inherit via the shared selector list in CSS.
 */
export default function Card({ as: Tag = 'div', className = '', children, ...props }) {
  return (
    <Tag className={`card ${className}`.trim()} {...props}>
      {children}
    </Tag>
  )
}
