import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  border: 1px solid #9b59b6; /* Lovely purple color */
  margin: 10px;
  padding: 15px;
  border-radius: 8px;

  img {
    width: 300px;
    height: 200px;
    border-radius: 4px;
    margin-right: 20px;
  }
`;

const DescriptionWrapper = styled.div`
  flex: 1;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 10px;

    a {
      text-decoration: none;
      color: #3498db; /* Blue color */
      transition: color 0.3s ease;

      &:hover {
        color: #007bff;
      }
    }
  }

  p {
    font-size: 1rem;
    color: #555;
  }

  p.published {
    font-size: 0.8rem;
    color: #888;
  }
`;

const NewsItem = ({ data }) => {
  const { urlToImage, title, description, url, publishedAt } = data;

  return (
    <Wrapper>
      <div>
        <img src={urlToImage} alt={title} />
      </div>

      <DescriptionWrapper>
        <h1>
          <a href={url}>{title}</a>
        </h1>
        <p>{description}</p>
        <p className="published">{`작성시간 : ${publishedAt}`}</p>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default NewsItem;
