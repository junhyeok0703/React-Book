import React from "react";
import NewsItem from "./NewsItem";

const NewsList = ({ datas }) => {
  if (!datas || datas.length === 0) {
    return <div>No data available.</div>;
  }
  return (
    <div>
      {datas.map((data) => {
        return <NewsItem key={data.id} data={data} />;
      })}
    </div>
  );
};

export default NewsList;
