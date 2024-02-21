import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CharacterId = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const characterId = params.characterId;
  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("1");
        const response = await axios.get(
          `https://site--marvel-backend--zg6fw4jztfcn.code.run/comics/${characterId}`
        );
        console.log("response que je cherche=>", response.data);
        // console.log("image=>", response.data.thumbnail.path);
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
  ) : data.comics.length === 0 ? (
    //  data.thumbnail.path ===
    //   "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
    <p className="sorry">
      Je suis navré, l'API fournie ne nous renvoie aucune information pour ce
      personnage.
    </p>
  ) : (
    <div className="id-container">
      {data.comics.map((comic) => {
        // console.log("un comic=>", comic);
        return (
          <div className="id-cards">
            <div className="id-top">
              <h2>{comic.title}</h2>
              <div className="id-bot">
                <img
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt=""
                />
                <p>{comic.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterId;
