import { Link } from "react-router-dom";
import logo from "../assets/images/artofcse.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Learning with Art of CSE Logo" />
            <h3>Learning with Art of CSE</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
