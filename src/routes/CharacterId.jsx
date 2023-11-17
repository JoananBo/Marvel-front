import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
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
      {data.comics.map((comic) => {
        console.log("un comic=>", comic);
        return (
          <div>
            <p>{comic.title}</p>
            <img
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt=""
            />
            <p>{comic.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterId;
