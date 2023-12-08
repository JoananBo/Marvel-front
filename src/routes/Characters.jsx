import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = ({ search }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const addEllipsis = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--zg6fw4jztfcn.code.run/characters?name=${search}`
        );
        console.log("response=>", response.data);
        // console.log("Je me relance une fois");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("erreur =>", error);
      }
    };
    fetchData();
  }, [search]);
  return isLoading ? (
    <p>Un peu de patience...</p>
  ) : (
    <div>
      <div className="cards-container">
        {data.results.map((character) => {
          console.log("character=>", character);
          return (
            <Link
              to={`/comics/${character._id}`}
              target="_blank"
              // state={{ characterId: character._id }}
              style={{ textDecoration: "none" }}
            >
              <div className="cards">
                <div className="card-top">
                  <h1>{character.name}</h1>
                </div>
                <div className="card-bot">
                  <img
                    src={
                      character.thumbnail.path +
                        "." +
                        character.thumbnail.extension ===
                      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                        ? "../src/assets/img/avengers-logo.jpeg"
                        : character.thumbnail.path +
                          "." +
                          character.thumbnail.extension
                    }
                    alt={character.name}
                  />
                  <div>
                    {/* <p>{character.description}</p> */}
                    <p>{addEllipsis(character.description, 100)}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Characters;
