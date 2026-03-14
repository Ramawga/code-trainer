import "./styles.scss";
import { FaFire } from "react-icons/fa";
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title"><FaFire  color="#7505dc"/>CodeTrainer</h1>
        <nav className="header__nav">
          <a className="header__navlink" href="#">
            Home
          </a>
          <a className="header__navlink" href="#">
            Challenges
          </a>
          <a className="header__navlink" href="#">
            Dashboard
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
