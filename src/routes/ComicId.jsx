import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ComicsId = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const comicId = params.comicId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--zg6fw4jztfcn.code.run/comic/${comicId}`
        );
        console.log("response=>", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("erreur front=>", error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Un peu de patience...</p>
  ) : (
    <div className="container">
      <div className="comicid">
        <p className="comicid-top">{data.title}</p>

        <img
          src={data.thumbnail.path + "." + data.thumbnail.extension}
          alt=""
        />
        <p className="comicid-bot">{data.description}</p>
      </div>
    </div>
  );
};
export default ComicsId;
