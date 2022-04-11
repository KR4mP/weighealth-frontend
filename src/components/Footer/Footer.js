import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="entryContent">
          <Link className="link" to="/about">
            <h3>About Us</h3>
          </Link>
        </div>
        <div className="entryContent">
          <Link className="link" to="/privacy-policy">
            <h3>Privacy Policy</h3>
          </Link>
        </div>
        <div className="entryContent">
          <Link className="link" to="/terms">
            <h3>Terms</h3>
          </Link>
        </div>
        <div className="entryContent">
          <Link className="link" to="/contact">
            <h3>Contact</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
