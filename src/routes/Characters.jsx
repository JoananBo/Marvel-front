import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/characters");
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
              <div className="card">
                <div className="card-name">
                  <p>{character.name}</p>
                </div>
                <div className="card-img-story">
                  <img
                    src={
                      character.thumbnail.path +
                      "." +
                      character.thumbnail.extension
                    }
                    alt={character.name}
                  />
                  <div>
                    <p>{character.description}</p>
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
