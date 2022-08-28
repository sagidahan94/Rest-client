import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { appBaseUrl, PAGE_SIZE } from "../api";

const NavbarDesktop: React.FC = () => {
  const history = useHistory();
  const [route, setRoute] = useState("home");

  const onRestaurantsClicked = () => {
    history.push(`/restaurants/?skip=${0}&limit=${PAGE_SIZE}&f=All`);
    setRoute("restaurants");
  };

  const onChefsClicked = () => {
    history.push("/chefs");
    setRoute("chefs");
  };

  const onHomeIconClicked = () => {
    history.push("/home");
    setRoute("home");
  };

  return (
    <NavbarContainer>
      <LeftBarContainer>
        <HomeContainer onClick={onHomeIconClicked}>
          <HomeIcon src={appBaseUrl + "assets/icons/epicure-icon.png"} />
          <HomeText>EPICURE</HomeText>
        </HomeContainer>
        <SectionButton
          isSelected={route.includes("restaurant")}
          onClick={onRestaurantsClicked}
        >
          Restaurants
        </SectionButton>
        <SectionButton
          isSelected={route.includes("chefs")}
          onClick={onChefsClicked}
        >
          Chefs
        </SectionButton>
      </LeftBarContainer>
      <RightBarContainer>
        <SearchBar>
          <SearchInput placeholder={SearchPlaceHolder}></SearchInput>
          <SearchButton />
        </SearchBar>
        <Profile />
        <Bag />
      </RightBarContainer>
    </NavbarContainer>
  );
};

export default NavbarDesktop;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px 123px;
  border-bottom: 1px solid gainsboro;
  @media (max-width: 1000px) {
    padding: 10px 15px;
  }
`;

const LeftBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
  gap: 15px;
  @media (min-width: 1200px) {
    gap: 25px;
  }
`;

const RightBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  gap: 15px;
  @media (min-width: 1200px) {
    gap: 25px;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const HomeIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const HomeText = styled.div`
  font-size: 22px;
  @media (min-width: 1200px) {
    font-size: 25px;
  }
`;

const SectionButton = styled.button`
  background-color: inherit;
  font-size: 18px;
  letter-spacing: 0.5px;
  border: none;
  border-bottom: 2px solid orange;
  padding: 0;
  border: ${(props: { isSelected: boolean }) =>
    props.isSelected ? "" : "hidden"};
  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

const SearchPlaceHolder = "Search for resturatns cuisine, chef";

const SearchBar = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  width: 70%;
  max-width: 420px;
  padding: 5px;
  justify-content: center;
  display: flex;
  gap: 15px;
`;
const SearchButton = styled.button`
  width: 18px;
  height: 18px;
  background: url("${appBaseUrl}assets/icons/search.svg");
  background-size: 18px 18px;
  border: none;
`;
const SearchInput = styled.input`
  font-size: 16px;
  background: inherit;
  width: 80%;
  border: none;
  &:focus {
    outline: none;
  }
`;

const Profile = styled.button`
  width: 21px;
  height: 21px;
  background: url("${appBaseUrl}assets/icons/profile.svg");
  background-size: 21px 21px;
  background-repeat: no-repeat;

  border: none;
`;
const Bag = styled.button`
  width: 21px;
  height: 21px;
  background: url("${appBaseUrl}assets/icons/bag.svg");
  background-size: 21px 21px;
  background-repeat: no-repeat;
  border: none;
`;
