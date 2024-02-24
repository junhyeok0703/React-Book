import { useEffect, useState } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const APIKEY = "87c812d2ba284501b0dbcbbfbe8730f4";

  useEffect(() => {
    getNewData();
  }, []);

  const getNewData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${APIKEY}`
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
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <NewsList datas={data.articles} />}
    </div>
  );
}

export default App;
