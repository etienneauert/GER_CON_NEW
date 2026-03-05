import './Header.css'

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">GER CON.</h1>
      <div className="header__right">
        <span className="material-symbols-outlined header__icon">add_2</span>
        <span className="header__menu">MENU</span>
      </div>
    </header>
  )
}

export default Header
