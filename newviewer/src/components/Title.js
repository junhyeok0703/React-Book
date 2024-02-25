import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  font-family: "Arial", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #9b59b6; /* Lovely purple color */
  text-align: center;
  margin-bottom: 20px;
`;

const Title = () => {
  return <TitleWrapper>new viewer</TitleWrapper>;
};

export default Title;
