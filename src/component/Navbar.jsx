import { Link } from 'react-router-dom';

const NavBar = () => (
  <NavBar>
    <h1>Math Magicians</h1>
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </NavBar>
);

export default NavBar;
