import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const Characters = ({ search }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPage] = useState(28);

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
        setData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log("erreur =>", error);
      }
    };
    fetchData();
  }, [search]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  return isLoading ? (
    <p>Un peu de patience...</p>
  ) : (
    <div>
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="cards-container">
        {currentPost.map((character) => {
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
                      comics.thumbnail.path + "." + comics.thumbnail.extension
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
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
export default Characters;
