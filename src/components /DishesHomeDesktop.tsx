import React from "react";
import styled from "styled-components";
import { AppBaseUrl, Dish } from "../api";
import { useAppDispatch } from "../redux/hooks";
import { dishActions } from "../redux/slice/dish.slice";
import { displayActions } from "../redux/slice/display-slice";

interface props {
  dishes: Dish[];
}

const DishesHomeDesktop: React.FC<props> = ({ dishes }) => {
  const dispatch = useAppDispatch();

  const onDishClick = (dish: Dish) => {
    dispatch(dishActions.setdish(dish));
    dispatch(displayActions.setShowDish(true));
  };

  return (
    <DishesDisplayContainer>
      <Header>SIGNATURE DISH OF :</Header>
      <DishesContainer>
        {dishes.map((dish, index) => {
          return (
            <DishContainer key={index} onClick={() => onDishClick(dish)}>
              <RestaurantName>Tiger Lilly</RestaurantName>
              <CardContainer>
                <DishImage src={AppBaseUrl + dish.image} />
                <DishDetails>
                  <DishName>{dish.name}</DishName>
                  <DishDescription>{dish.ingredients}</DishDescription>
                  <BottomDetails>
                    <DishIcon
                      src={AppBaseUrl + "assets/icons/spicy-icon@2x.png"}
                    />
                    <DishPrice>₪{dish.price}</DishPrice>
                  </BottomDetails>
                </DishDetails>
              </CardContainer>
            </DishContainer>
          );
        })}
      </DishesContainer>
    </DishesDisplayContainer>
  );
};

export default DishesHomeDesktop;

const DishesDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  max-width: 1100px;
  margin: auto;
  margin-top: 80px;
  gap: 30px;
  @media (max-width: 1000px) {
    width: 85%;
  }
`;

const Header = styled.div`
  font-size: 30px;
  letter-spacing: 1px;
  @media (max-width: 1100px) {
    font-size: 26px;
  }
`;

const DishesContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const DishContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.5%;
  cursor: pointer;
`;

const RestaurantName = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 15px;
  @media (max-width: 1100px) {
    font-size: 25px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 550px;
`;

const DishImage = styled.img`
  width: 100%;
  height: 45%;
  @media (max-width: 800px) {
    height: 30%;
  }
`;

const DishDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 55%;
  gap: 20px;
  background-color: beige;
  @media (max-width: 1100px) {
    height: 45%;
  }
`;

const DishName = styled.div`
  font-size: 30px;
  letter-spacing: 0.5px;
  font-weight: 500;
  text-align: center;
  width: 60%;
  height: 25%;
  margin-top: 15px;
  @media (max-width: 1100px) {
    font-size: 22px;
    width: 75%;
    margin-top: 5px;
  }
`;

const DishDescription = styled.div`
  text-align: center;
  font-size: 20px;
  letter-spacing: 1px;
  width: 85%;
  height: 50%;
  @media (max-width: 1100px) {
    font-size: 16px;
    width: 90%;
  }
`;

const BottomDetails = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`;

const DishIcon = styled.img`
  width: 39px;
  height: 30px;
  @media (max-width: 1100px) {
    width: 25px;
    height: 20px;
  }
`;

const DishPrice = styled.div`
  font-size: 20px;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;
