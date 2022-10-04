import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Products</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
};

export default Nav;
