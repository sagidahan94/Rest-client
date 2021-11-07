import React from "react";
import styled from "styled-components";

function RestaurantPage() {
  return (
    <PageContainer>
      <RestaurantImage src="assets/rest/claro.png" />
      <RestaurantName>Claro</RestaurantName>
      <RestaurantChef>Ran Shmueli</RestaurantChef>
      <OpenContainer>
        <OpenIcon src="assets/icons/clock.svg" />
        <OpenStatus>Open now</OpenStatus>
      </OpenContainer>
      <TabsContainer>
        <Tab>Breakfast</Tab>
        <Tab>Lunch</Tab>
        <Tab>Dinner</Tab>
      </TabsContainer>
      <DishesContainer>
        <DishContainer>
          <DishImage src="assets/dishes/pad-ki-mao.png" />
          <DishDetails>
            <DishName>Pad Ki Mao</DishName>
            <DishDescription>
              Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass
            </DishDescription>
            <DishIcon src="assets/icons/spicy.svg" />
            <DishPrice>88</DishPrice>
          </DishDetails>
        </DishContainer>
        <DishContainer>
          <DishImage src="assets/dishes/pad-ki-mao.png" />
          <DishDetails>
            <DishName>Pad Ki Mao</DishName>
            <DishDescription>
              Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass
            </DishDescription>
            <DishIcon src="assets/icons/spicy.svg" />
            <DishPrice>88</DishPrice>
          </DishDetails>
        </DishContainer>
        <DishContainer>
          <DishImage src="assets/dishes/pad-ki-mao.png" />
          <DishDetails>
            <DishName>Pad Ki Mao</DishName>
            <DishDescription>
              Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass
            </DishDescription>
            <DishIcon src="assets/icons/spicy.svg" />
            <DishPrice>88</DishPrice>
          </DishDetails>
        </DishContainer>
        <DishContainer>
          <DishImage src="assets/dishes/pad-ki-mao.png" />
          <DishDetails>
            <DishName>Pad Ki Mao</DishName>
            <DishDescription>
              Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass
            </DishDescription>
            <DishIcon src="assets/icons/spicy.svg" />
            <DishPrice>88</DishPrice>
          </DishDetails>
        </DishContainer>
        <DishContainer>
          <DishImage src="assets/dishes/pad-ki-mao.png" />
          <DishDetails>
            <DishName>Pad Ki Mao</DishName>
            <DishDescription>
              Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass
            </DishDescription>
            <DishIcon src="assets/icons/spicy.svg" />
            <DishPrice>88</DishPrice>
          </DishDetails>
        </DishContainer>
        <DishContainer>
          <DishImage src="assets/dishes/pad-ki-mao.png" />
          <DishDetails>
            <DishName>Pad Ki Mao</DishName>
            <DishDescription>
              Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass
            </DishDescription>
            <DishIcon src="assets/icons/spicy.svg" />
            <DishPrice>88</DishPrice>
          </DishDetails>
        </DishContainer>
      </DishesContainer>
      <Section>
        <SectionText>LUNCH</SectionText>
        <Line></Line>
      </Section>
    </PageContainer>
  );
}

export default RestaurantPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const RestaurantImage = styled.img`
  display: flex;
  width: 100%;
  height: 254px;
`;

const RestaurantName = styled.div`
  font-size: 35px;
  letter-spacing: 2px;
  margin-top: 10px;
`;

const RestaurantChef = styled.div`
  font-size: 24px;
  letter-spacing: 1px;
`;

const OpenContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
  margin: 15px 0px;
`;

const OpenIcon = styled.img`
  width: 13px;
  height: 13px;
`;

const OpenStatus = styled.div`
  font-size: 12px;
  letter-spacing: 0.5px;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: center;
  justify-content: space-between;
`;

const Tab = styled.div`
  font-size: 17px;
  letter-spacing: 1px;
  cursor: pointer;
`;

const DishesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  // width: 90%;
  gap: 20px;
`;

const DishContainer = styled.div`
  width: 47%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const DishImage = styled.img`
  width: 100%;
  height: 100px;
`;

const DishDetails = styled.div`
  height: 170px;
  width: 100%;
  background: beige;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const DishName = styled.h2`
  margin-top: 0px;
  margin-bottom: 0;
  font-size: 15px;
`;

const DishDescription = styled.div`
  text-align: center;
  font-size: 13px;
  letter-spacing: 0.7px;
  word-spacing: 0.1px;
  margin: 10px 20px;
`;

const DishIcon = styled.img`
  width: 17px;
  height: 17px;
  margin-top: 5px;
`;

const DishPrice = styled.div`
  font-size: 14px;
  margin-top: 2px;
`;

const Section = styled.div`
  width: 90%;
  text-align: center;
`;

const Line = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: auto;
  margin-top: -10px;
`;

const SectionText = styled.div`
  font-size: 14px;
  letter-spacing: 1px;
  width: 30%;
  background: white;
  margin-bottom: -10px;
  margin: auto;
  padding: 0px 10px;
  position: relative;
  margin-bottom: -10px;
`;
