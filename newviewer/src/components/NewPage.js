import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import NewsList from "./NewsList";
import Categories from "./Categories";
import Title from "./Title";

function NewPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const APIKEY = "87c812d2ba284501b0dbcbbfbe8730f4";
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  console.log(data);
  useEffect(() => {
    getNewData();
  }, [category]);

  const getNewData = async () => {
    try {
      const query = category === "all" ? "" : `&category=${category}`;
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${APIKEY}`
      );
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Title />
      <Categories category={category} onSelect={onSelect} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <NewsList datas={data.articles} />}
    </div>
  );
}

export default NewPage;
