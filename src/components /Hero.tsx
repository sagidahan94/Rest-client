import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <HeroContainer>
      <SearchContainer>
        <SearchText>
          Epicure works with the top <br /> chef restaurants in Tel Aviv
        </SearchText>
        <SearchBar>
          <SearchButton></SearchButton>
          <SearchInput placeholder={SearchPlaceHolder}></SearchInput>
        </SearchBar>
      </SearchContainer>
    </HeroContainer>
  );
}

export default Hero;

const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 269px;
  background: url("assets/rest/home-page-mobile.png");
  background-size: cover;
`;

const SearchContainer = styled.div`
  width: 335px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.88);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

const SearchPlaceHolder = "Search for resturatns cuisine, chef";

const SearchText = styled.h1`
  align-self: center;
  font-size: 16px;
  color: black;
`;

const SearchBar = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  background: in;
  width: 80%;
  padding: 5px;
  justify-content: center;
  display: flex;
  gap: 15px;
`;
const SearchButton = styled.button`
  width: 18px;
  height: 18px;
  background: url("assets/icons/search.svg");
  background-size: 18px 18px;
  border: none;
`;
const SearchInput = styled.input`
  background: inherit;
  width: 80%;
  border: none;
`;
