import React from "react";
import styled from "styled-components";
import { appBaseUrl } from "../api";

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <SearchContainer>
        <SearchText>
          Epicure works with the top <br /> chef restaurants in Tel Aviv
        </SearchText>
        <SearchBar>
          <SearchInput placeholder={SearchPlaceHolder} />
          <SearchButton />
        </SearchBar>
      </SearchContainer>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 269px;
  background: url("${appBaseUrl}assets/rest/home-page-mobile.png");
  background-size: cover;
  @media (min-width: 600px) {
    height: 700px;
    background: url("${appBaseUrl}assets/rest/home-page-desktop.png");
    background-size: cover;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 125px;
  width: 90%;
  margin: auto;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.88);
  @media (min-width: 600px) {
    height: 227px;
    width: 70%;
    gap: 25px;
    max-width: 770px;
  }
  @media (max-width: 800px) {
    width: 80%;
  }
`;

const SearchPlaceHolder = "Search for resturatns cuisine, chef";

const SearchText = styled.div`
  font-size: 16px;
  letter-spacing: 1.5px;
  color: black;
  gap: 10px;
  @media (min-width: 600px) {
    font-size: 35px;
    gap: 25px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  border-radius: 4px;
  background: in;
  width: 80%;
  padding: 5px 0px 5px 0px;
  gap: 15px;
  @media (min-width: 600px) {
    padding: 10px 0px 10px 0px;
  }
`;

const SearchButton = styled.button`
  width: 18px;
  height: 18px;
  background: url("${appBaseUrl}assets/icons/search.svg");
  background-size: 18px 18px;
  border: none;
  @media (min-width: 600px) {
    width: 33px;
    height: 33px;
    background: url("${appBaseUrl}assets/icons/search.svg");
    background-size: 33px 33px;
  }
`;

const SearchInput = styled.input`
  font-size: 12px;
  background: inherit;
  width: 80%;
  border: none;
  &:focus {
    outline: none;
  }
  @media (min-width: 600px) {
    font-size: 22px;
  }
`;
