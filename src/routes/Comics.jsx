import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const Comics = ({ search }) => {
  const [data, SetData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const imgNot = data.thumbnail.path.indexOf("image_not_available");
  const addEllipsis = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--zg6fw4jztfcn.code.run/comics?title=${search}`
        );
        console.log("response =>", response.data);
        SetData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log("erreur =>", error);
      }
    };
    fetchData();
  }, [search]);
  // const imgNot = data.thumbnail.path.indexOf("image_not_available");
  return isLoading ? (
    <p>Un peu de patience...</p>
  ) : (
    <div className="comics-container">
      {data.results.map((comics) => {
        // console.log(comics);
        // const imgNot = comics.thumbnail.path.indexOf("image_not_available");
        return (
          <Link
            to={`/comic/${comics._id}`}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <div className="comic-cards">
              <div className="id-top">
                <h2>{comics.title}</h2>
              </div>
              <div className="id-bot">
                <img
                  src={comics.thumbnail.path + "." + comics.thumbnail.extension}
                  alt={comics.title}
                />

                <div>
                  {/* <p>{comics.description}</p> */}
                  {/* <p>{addEllipsis(comics.description, 1)}</p> */}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Comics;
