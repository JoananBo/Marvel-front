import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const addEllipsis = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://site--marvel-backend--zg6fw4jztfcn.code.run/characters"
        );
        console.log("response=>", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("erreur =>", error);
      }
    };
    fetchData();
  }, []);
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
              // state={{ characterId: character._id }}
            >
              <div className="cards">
                <div className="card-top">
                  <h2>{character.name}</h2>
                </div>
                <div className="card-bot">
                  <img
                    src={
                      character.thumbnail.path +
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
