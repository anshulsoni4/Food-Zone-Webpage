// import React from 'react'
import styled from "styled-components";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
        <FoodCards>

        </FoodCards>
      </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`

height: calc(80vh - 60px);
background-image: url("/bg.png");
background-size: cover;

`;

const FoodCards = styled.div``;