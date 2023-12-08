import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({ search, setSearch }) => {
  let location = useLocation();

  return (
    <header>
      <div className="header-block">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        {(location.pathname === "/characters" ||
          location.pathname === "/comics") && (
          <div>
            <input
              placeholder="   Recherche..."
              type="text"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
        )}

        <section>
          <Link to="/characters">
            <button>Personnages</button>
          </Link>
          <Link to="/comics">
            <button>Comics</button>
          </Link>
          <a
            href="https://youtube.com/shorts/rzf-kCICBiY?si=K2maoGgCxA9Jrgi_"
            target="_blank"
          >
            <button>Favoris</button>
          </a>
        </section>
      </div>
    </header>
  );
};
export default Header;
