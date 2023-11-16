import logo from "/Users/joananboureille/Lereacteur/Tests-techniques/test-marvel/frontend/src/assets/img/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-block">
      <img src={logo} alt="" />
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
