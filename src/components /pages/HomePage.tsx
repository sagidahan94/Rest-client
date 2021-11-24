import React, { useEffect, useState } from "react";
import Buttons from "../Buttons";
import RestaurantsSliderChef from "../RestaurantsSliderChef";
import Hero from "../Hero";
import DishesSlider from "../DishesSlider";
import DishesMap from "../DishesMap";
import ChefOfTheWeek from "../ChefOfTheWeek";
import About from "../About";
import RestaurantsSlider from "../RestaurantsSlider";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import RestaurantsHomeDesktop from "../RestaurantsHomeDesktop";
import DishesHomeDesktop from "../DishesHomeDesktop";
import { useAppSelector } from "../../redux/hooks";
import DishPage from "../DishModal";
import { apiClient, Chef, Dish, Restaurants } from "../../api";
import LoadingPage from "./LoadingPage";
import ChefOfTheWeekRests from "../ChefOfTheWeekRests";

const HomePage: React.FC = () => {
  const isDesktopScreen = useMediaQuery({ query: "(min-width: 600px)" });
  const showDish = useAppSelector((state) => state.display.showDish);
  const [rests, setRests] = useState<Restaurants[]>();
  const [dishes, setDishes] = useState<Dish[]>();
  const [chefOfTheWeek, setChefOfTheWeek] = useState<Chef>();

  useEffect(() => {
    const fetcApi = async () => {
      const rests = await apiClient.getAllItems("restaurants");
      const dishes = await apiClient.getAllItems("dishes");
      const chefs = await apiClient.getAllItems("chefs");
      const chef = await apiClient.getItem("chefs", chefs[0]._id);
      setDishes(dishes);
      setRests(rests);
      setChefOfTheWeek(chef);
    };
    fetcApi();
  }, []);

  return (
    <>
      {rests && dishes && chefOfTheWeek ? (
        <HomePageContainer>
          <Hero />
          {!isDesktopScreen && <Buttons />}
          {isDesktopScreen ? (
            <RestaurantsHomeDesktop rests={rests.slice(0, 3)} />
          ) : (
            <RestaurantsSlider rests={rests} />
          )}
          {isDesktopScreen ? (
            <DishesHomeDesktop dishess={dishes.slice(0, 3)} />
          ) : (
            <DishesSlider dishess={dishes} />
          )}
          <DishesMap />
          <ChefOfTheWeek chefOfTheWeek={chefOfTheWeek} />
          {isDesktopScreen ? (
            <ChefOfTheWeekRests
              chefOfTheWeek={chefOfTheWeek}
              rests={chefOfTheWeek.restaurants}
            />
          ) : (
            <RestaurantsSliderChef rests={chefOfTheWeek.restaurants} />
          )}
          <About />
          {showDish && <DishPage />}
        </HomePageContainer>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};
export default HomePage;

const HomePageContainer = styled.div`
  overflow: hidden;
  overflow-x: hidden;
`;
