const FACTS = [
  {
    label: 'Frameworks',
    value:
      'OSCAR for structured feedback, active listening and powerful questioning, and GROW for running a short coaching conversation',
  },
  {
    label: 'Original format',
    value: 'Two-hour instructor-led virtual session, 39 slides',
  },
  {
    label: 'The ask',
    value:
      'Rebuild it as a short, self-paced module organized around practice, without losing any of the original substance',
  },
  {
    label: 'Audience',
    value: 'New and mid-level managers',
  },
]

export default function Context() {
  return (
    <section
      id="context"
      className="section section--compact"
      aria-labelledby="context-title"
    >
      <div className="container">
        <header className="section-header section-header--readable">
          <p className="section-title">The Project</p>
          <h2 id="context-title">What I was working with</h2>
          <p>
            Coaching Skills for Managers is an existing corporate training that
            teaches managers to develop their teams by asking and listening
            rather than simply giving instructions. It was delivered as a live,
            two-hour virtual workshop covering three coaching frameworks.
          </p>
        </header>

        <dl className="meta-list context-facts">
          {FACTS.map((item) => (
            <div className="meta-list__item" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
