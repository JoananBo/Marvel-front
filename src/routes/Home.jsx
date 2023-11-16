import { Router } from "react-router-dom";
import hero from "../assets/img/hero2.webp";

const Home = () => {
  return (
    <div className="container">
      <a href="https://www.marvel.com/" target="_blank">
        <img className="hero-img" src={hero} alt="" />
      </a>
    </div>
  );
};
export default Home;
