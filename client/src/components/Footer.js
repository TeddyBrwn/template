import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="flex justify-center space-x-4">
      <p>Share</p>
      <div className="flex justify-center space-x-4 items-center">
        <Link to="/">
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </div>
      <p>|</p>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Footer;
