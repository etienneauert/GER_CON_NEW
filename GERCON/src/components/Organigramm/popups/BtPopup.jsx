import DeptPopup from './DeptPopup.jsx'

function BtPopup({ onClose }) {
  return (
    <DeptPopup title="BT — Business Transformation" onClose={onClose}>
      <p className="dept-popup__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis
        iste natus error sit voluptatem accusantium doloremque laudantium.
      </p>
      <h3 className="dept-popup__section-title">Leistungen</h3>
      <ul className="dept-popup__list">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Totam rem aperiam eaque ipsa</li>
      </ul>
      <h3 className="dept-popup__section-title">Team</h3>
      <p className="dept-popup__text">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </p>
    </DeptPopup>
  )
}

export default BtPopup
