import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppDispatch } from "../redux/hooks";
import { displayActions } from "../redux/slice/display-slice";
import { AppBaseUrl, Dish } from "../api";
import { dishActions } from "../redux/slice/dish.slice";

interface props {
  dishess: Dish[];
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const DishesSlider: React.FC<props> = ({ dishess }) => {
  const dispatch = useAppDispatch();

  const onDishClick = (dish: Dish) => {
    dispatch(dishActions.setdish(dish));
    dispatch(displayActions.setShowDish(true));
  };

  return (
    <SliderContainer>
      <SliderHeader>SIGNATURE DISH OF:</SliderHeader>
      <RestaurantName>Tiger Lilly</RestaurantName>
      <Slider {...settings}>
        {dishess.map((dish, index) => {
          return (
            <DishContainer key={index} onClick={() => onDishClick(dish)}>
              <DishDiv>
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
              </DishDiv>
            </DishContainer>
          );
        })}
      </Slider>
    </SliderContainer>
  );
};

export default DishesSlider;

const SliderContainer = styled.div`
  margin-top: 100px;
`;

const SliderHeader = styled.div`
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.5px;
  @media (min-width: 600px) {
    font-size: 25px;
  }
`;

const RestaurantName = styled.h2`
  margin-bottom: 0;
  font-size: 16px;
  letter-spacing: 0.5px;
  text-align: center;
`;

const DishContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DishDiv = styled.div`
  margin-top: 15px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f7e0b2;
  width: 70%;
  max-width: 280px;
  height: 460px;
  cursor: pointer;
`;

const DishImage = styled.img`
  width: 100%;
  height: 45%;
`;

const DishDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 55%;
`;

const DishName = styled.div`
  width: 80%;
  height: 15%;
  font-size: 22px;
  letter-spacing: 0.5px;
  font-weight: 500;
  text-align: center;
  margin-top: 5px;
`;

const DishDescription = styled.div`
  text-align: center;
  font-size: 17px;
  letter-spacing: 0.5px;
  width: 85%;
  height: 50%;
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
`;

const DishPrice = styled.div`
  font-size: 20px;
`;
