import { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {
  const [data, SetData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/comics");
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
    <div>
      {data.results.map((comics) => {
        console.log(comics);
        return (
          <div>
            <p>{comics.title}</p>
            <img
              src={comics.thumbnail.path + "." + comics.thumbnail.extension}
              alt=""
            />
            <p>{comics.description}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Comics;
