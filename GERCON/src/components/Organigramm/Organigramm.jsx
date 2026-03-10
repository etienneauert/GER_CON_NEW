import './Organigramm.css'
import gercon from './data/gercon.json'
import ocm from './data/ocm.json'
import sie from './data/sie.json'
import bt from './data/bt.json'

function Organigramm() {
  return (
    <section id="organigramm" className="organigramm">
      <div className="organigramm__content">
        <div className="organigramm__eyebrow-wrap">
          <span className="organigramm__eyebrow">ABTEILUNGSSTRUKTUR</span>
        </div>
        <div className="organigramm__top">
          <div className="organigramm__dept">{gercon.department}</div>
          <p className="organigramm__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="organigramm__row">
          <div className="organigramm__node">
            <div className="organigramm__dept">{ocm.department}</div>
            <p className="organigramm__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
          <div className="organigramm__node organigramm__node--expanded">
            <div className="organigramm__dept">{sie.department}</div>
            <p className="organigramm__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="organigramm__subrow">
              <div className="organigramm__subnode">SIE 1</div>
              <div className="organigramm__subnode">SIE 2</div>
              <div className="organigramm__subnode">SIE 3</div>
            </div>
          </div>
          <div className="organigramm__node">
            <div className="organigramm__dept">{bt.department}</div>
            <p className="organigramm__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam eaque
              ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Organigramm
