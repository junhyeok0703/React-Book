import React from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ data }) => {
  const { urlToImage, title, description, url } = data;
  return (
    <div style={{ background: url({ urlToImage }) }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to={url}>링크</Link>
    </div>
  );
};

export default NewsItem;
