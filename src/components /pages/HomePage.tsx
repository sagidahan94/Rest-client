import React from "react";
import Buttons from "../Buttons";
import RestaurantsSliderChef from "../RestaurantsSliderChef";
import Hero from "../Hero";
import DishesSlider from "../DishesSlider";
import DishesMap from "../DishesMap";
import ChefOfTheWeek from "../ChefOfTheWeek";
import About from "../About";
import RestaurantsSlider from "../RestaurantsSlider";
import styled from "styled-components";

function HomePage() {
  return (
    <HomePageContainer>
      <Hero></Hero>
      <Buttons></Buttons>
      <RestaurantsSliderChef></RestaurantsSliderChef>
      <DishesSlider></DishesSlider>
      <DishesMap></DishesMap>
      <ChefOfTheWeek></ChefOfTheWeek>
      <RestaurantsSlider></RestaurantsSlider>
      <About></About>
    </HomePageContainer>
  );
}

export default HomePage;

const HomePageContainer = styled.div`
  overflow: hidden;
`;
