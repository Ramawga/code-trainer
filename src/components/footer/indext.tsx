import "./styles.scss";
import { FaFire } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__main">
          <h2 className="title">
            <FaFire color="#7505dc" /> CodeTrainer
          </h2>
          <p className="text">
            Build skills with AI-powered challenges. Practice, iterate, and
            master algorithms and system design.
          </p>
        </div>
        <div className="footer__links">
          <h5 className="linkTitle">Social</h5>
          <a href="#">
            <h4 className="link">GitHub</h4>
          </a>
          <a href="#">
            <h4 className="link">LinkedIn</h4>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
