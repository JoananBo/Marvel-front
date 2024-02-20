import hero from "../assets/img/hero2.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <Link to={"/characters"}>
        <div className="container">
          <img className="hero-img" src={hero} alt="marvel.com" />
        </div>
      </Link>
    </section>
  );
};
export default Home;
