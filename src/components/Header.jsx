import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-block">
      <Link to="/characters">
        <img src={logo} alt="" />
      </Link>
      <section>
        <Link to="/characters">
          <button>Personnages</button>
        </Link>
        <Link to="/comics">
          <button>Comics</button>
        </Link>
        <button>Favoris</button>
      </section>
    </div>
  );
};
export default Header;
