import { OBJECTIVES } from '../config'

export default function Objectives() {
  return (
    <section className="section" aria-labelledby="objectives-title">
      <div className="container">
        <header className="section-header section-header--readable">
          <h2 id="objectives-title">Every objective leads to observable practice</h2>
          <p>
            By the end of the module, a manager will be able to perform the
            behaviors below. I mapped each outcome to a corresponding learning or
            assessment experience.
          </p>
        </header>

        <div className="objectives-table" role="table" aria-label="Learning objectives alignment">
          <div className="objectives-table__head" role="row">
            <div role="columnheader">Objective</div>
            <div role="columnheader">Bloom’s level</div>
            <div role="columnheader">Learning evidence</div>
          </div>
          {OBJECTIVES.map((row) => (
            <article
              className="objectives-table__row"
              role="row"
              key={row.id}
              aria-label={`Objective ${row.id}`}
            >
              <div className="obj-cell obj-cell--objective" role="cell">
                <span className="obj-num">Objective {row.id}</span>
                <p>{row.objective}</p>
              </div>
              <div className="obj-cell obj-cell--bloom" role="cell">
                <span className="obj-label">Bloom’s level</span>
                <p>{row.bloom}</p>
              </div>
              <div className="obj-cell obj-cell--evidence" role="cell">
                <span className="obj-label">Learning evidence</span>
                <p>{row.evidence}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
