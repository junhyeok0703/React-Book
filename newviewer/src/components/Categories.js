import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const CategoryItem = styled.p`
  margin: 10px;
  cursor: pointer;
  border: 2px solid #9b59b6; /* Lovely purple color */
  padding: 15px 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background-color: #9b59b6; /* Lovely purple color on hover */
    color: #fff;
    border-color: #fff;
  }
`;

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "general",
    text: "일반",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const Categories = ({ category, onSelect }) => {
  const navigate = useNavigate();

  return (
    <CategoriesWrapper>
      {categories.map((c) => (
        <CategoryItem
          key={c.name}
          onClick={() => {
            onSelect(c.name);
            navigate(`/${c.name}`);
          }}
          style={{
            backgroundColor:
              category === c.name
                ? "#9b59b6"
                : "transparent" /* Lovely purple color when selected */,
            color: category === c.name ? "#fff" : "#9b59b6",
            borderColor: category === c.name ? "#fff" : "#9b59b6",
            boxShadow:
              category === c.name ? "0 0 10px rgba(155, 89, 182, 0.5)" : "none",
          }}
        >
          {c.text}
        </CategoryItem>
      ))}
    </CategoriesWrapper>
  );
};

export default Categories;
