import { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {
  const [data, SetData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const addEllipsis = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend--zg6fw4jztfcn.code.run/comics"
        );
        console.log("response =>", response.data);
        SetData(response.data);
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
    <div className="cards-container">
      {data.results.map((comics) => {
        console.log(comics);
        return (
          <div className="cards">
            <div className="card-top">
              <h2>{comics.title}</h2>
            </div>
            <div className="card-bot">
              <img
                src={comics.thumbnail.path + "." + comics.thumbnail.extension}
                alt={comics.title}
              />
              <div>
                <p>{comics.description}</p>
                {/* <p>{addEllipsis(comics.description, 1)}</p> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Comics;
