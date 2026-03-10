import './Organigramm.css'
import gercon from './data/gercon.json'
import ocm from './data/ocm.json'
import sie from './data/sie.json'
import bt from './data/bt.json'

function Organigramm() {
  return (
    <section className="organigramm">
      <div className="organigramm__content">
        <div className="organigramm__top">
          <div className="organigramm__dept">{gercon.department}</div>
          <div className="organigramm__meta">({gercon.metrics})</div>
        </div>

        <div className="organigramm__row">
          <div className="organigramm__node">
            <div className="organigramm__dept">{ocm.department}</div>
            <div className="organigramm__meta">({ocm.metrics})</div>
          </div>
          <div className="organigramm__node organigramm__node--expanded">
            <div className="organigramm__dept">{sie.department}</div>
            <div className="organigramm__meta">({sie.metrics})</div>
            <div className="organigramm__subrow">
              <div className="organigramm__subnode">SIE 1</div>
              <div className="organigramm__subnode">SIE 2</div>
              <div className="organigramm__subnode">SIE 3</div>
            </div>
          </div>
          <div className="organigramm__node">
            <div className="organigramm__dept">{bt.department}</div>
            <div className="organigramm__meta">({bt.metrics})</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Organigramm
