import { Router } from "react-router-dom";
import hero from "../assets/img/hero2.webp";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <a href="https://www.marvel.com/" target="_blank">
          <img className="hero-img" src={hero} alt="marvel.com" />
        </a>
      </div>
    </section>
  );
};
export default Home;
