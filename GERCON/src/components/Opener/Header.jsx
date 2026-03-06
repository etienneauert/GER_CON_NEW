import "./Header.css";
import atosAmplifyLogo from "../../ressources/Logo_Atos_Amplify_Coul_CMJN_page-0001.jpg";

function Header({ onMenuClick }) {
  return (
    <header className="opener-header">
      <img src={atosAmplifyLogo} alt="Atos Amplify Logo" className="opener-header__logo" />
      <button type="button" className="opener-header__right" onClick={onMenuClick}>
        <span className="material-symbols-outlined opener-header__icon">add_2</span>
        <span className="opener-header__menu">MENU</span>
      </button>
    </header>
  );
}

export default Header;
