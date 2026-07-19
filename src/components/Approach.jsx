const STAGES = [
  {
    id: 'focus',
    num: '01',
    name: 'Focus',
    lead: 'One idea at a time',
    body: 'Divided dense content into segments and revealed progressively.',
    icon: 'focus',
  },
  {
    id: 'see',
    num: '02',
    name: 'See',
    lead: 'Model the skill',
    body: 'Used realistic worked example before learners are asked to perform.',
    icon: 'see',
  },
  {
    id: 'try',
    num: '03',
    name: 'Try',
    lead: 'Answer & explain',
    body: 'Provided feedback that explains why each option works or fails.',
    icon: 'try',
  },
  {
    id: 'apply',
    num: '04',
    name: 'Apply',
    lead: 'Use the skill in context',
    body: 'Learners combine the frameworks in realistic management situations.',
    icon: 'apply',
  },
  {
    id: 'keep',
    num: '05',
    name: 'Keep',
    lead: 'Post-course support',
    body: 'Downloadable flashcards for future needs.',
    icon: 'keep',
  },
]

const STAGE_ICONS = {
  focus: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  see: (
    <>
      <path d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12s-3.5 6.5-9.5 6.5S2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  try: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M8 7.5v3.2c0 1.5 1.2 2.8 2.8 2.8H12" />
      <path d="M16 7.5v3.2c0 1.5-1.2 2.8-2.8 2.8H12" />
      <path d="M12 13.5V16" />
    </>
  ),
  apply: (
    <>
      <circle cx="9" cy="8" r="3.25" />
      <path d="M2.5 19.5c1.1-3 3.3-4.5 6.5-4.5s5.4 1.5 6.5 4.5" />
      <circle cx="17.5" cy="8.5" r="2.5" />
      <path d="M14.5 15.2c1.6-.55 3.2-.3 4.8.9.9.7 1.6 1.6 2 2.9" />
    </>
  ),
  keep: (
    <>
      <path d="M12 4v10" />
      <path d="M8.5 10.5 12 14l3.5-3.5" />
      <path d="M5 18h14" />
    </>
  ),
}

function StageIcon({ name }) {
  return (
    <span className="analysis-icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {STAGE_ICONS[name]}
      </svg>
    </span>
  )
}

export default function Approach() {
  return (
    <section
      id="approach"
      className="section"
      aria-labelledby="approach-title"
    >
      <div className="container">
        <header className="section-header section-header--readable approach-header">
          <p className="section-title">THE APPROACH</p>
          <h2 id="approach-title">How the redesign was built</h2>
          <p>
            The strategy was shaped by cognitive-load principles and by the need
            to make every interaction useful in a manager’s real work.
          </p>
        </header>

        <div className="approach-process">
          <ol className="approach-path" aria-label="Five-stage learning path">
            {STAGES.map((stage) => (
              <li
                className={`approach-stage approach-stage--${stage.id}`}
                key={stage.id}
              >
                <div className="approach-stage__icon">
                  <span className="approach-stage__node" aria-hidden="true" />
                  <StageIcon name={stage.icon} />
                </div>
                <div className="approach-stage__head">
                  <span className="approach-stage__num">{stage.num}</span>
                  <h3 className="approach-stage__name">{stage.name}</h3>
                </div>
                <p className="approach-stage__lead">{stage.lead}</p>
                <p className="approach-stage__body">{stage.body}</p>
              </li>
            ))}
          </ol>

          <p className="banner banner--redesign approach-conclusion" role="note">
            Each stage reduces support gradually, so managers move from
            understanding a framework to using it in a real conversation.
          </p>
        </div>
      </div>
    </section>
  )
}
