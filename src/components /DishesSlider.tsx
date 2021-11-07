import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function DishesSlider() {
  return (
    <SliderContainer>
      <SliderHeader>SIGNATURE DISH OF:</SliderHeader>
      <RestaurantName>Tiger Lilly</RestaurantName>
      <Slider {...settings}>
        <DishContainer>
          <DishDiv>
            <DishImage src="assets/dishes/pad-ki-mao.png" />
            <DishDetails>
              <DishName>Pad Ki Mao</DishName>
              <DishDescription>
                Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass,
                Magic Chili Brown Coconut
              </DishDescription>
              <DishIcon src="assets/icons/spicy.svg"></DishIcon>
              <DishPrice>₪88</DishPrice>
            </DishDetails>
          </DishDiv>
        </DishContainer>
      </Slider>
    </SliderContainer>
  );
}

export default DishesSlider;

const SliderContainer = styled.div`
  margin-top: 100px;
`;

const SliderHeader = styled.div`
  font-size: 14px;
  text-align: center;
`;

const RestaurantName = styled.h2`
  margin-bottom: 0;
  font-size: 16px;
  text-align: center;
`;

const DishDiv = styled.div`
  margin-top: 15px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f7e0b2;
  width: 70%;
  cursor: pointer;
`;

const DishContainer = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
`;

const DishImage = styled.img`
  width: 100%;
  height: 180px;
`;

const DishDetails = styled.div`
  height: 200px;
  display: flex;
  margin: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DishName = styled.h2`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const DishDescription = styled.div`
  text-align: center;
  font-size: 17px;
  width: 85%;
`;

const DishIcon = styled.img`
  width: 39px;
  height: 30px;
  margin-top: 5px;
`;

const DishPrice = styled.div`
  margin-top: 5px;
  font-size: 20px;
`;
