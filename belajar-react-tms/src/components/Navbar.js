import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        My Store
      </Link>
      <input className="searchbar" type="text" placeholder="Search.."></input>
      <ul>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="help">Help</Link>
        </li>
      </ul>
    </nav>
  );
}
