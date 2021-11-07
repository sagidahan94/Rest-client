import React from "react";
import styled from "styled-components";

const ChefOfTheWeek = () => {
  return (
    <ChefOfTheWeekContainer>
      <ChefOfTheWeekHeader>CHEF OF THE WEEK :</ChefOfTheWeekHeader>
      <ChefImageContainer>
        <ChefImage src="assets/chefs/yossi-shitrit.png" />
        <ChefNameBackground>
          <ChefName>Yossi Shitrit</ChefName>
        </ChefNameBackground>
      </ChefImageContainer>
      <ChefDescription>
        Chef Yossi Shitrit has been living and breathing his culinary dreams for
        more than two decades, including running the kitchen in his first
        restaurant, the fondly-remembered Violet, located in Moshav Udim.
        Shitrit's creativity and culinary acumen born of long experience are
        expressed in the every detail of each and every dish.
      </ChefDescription>
    </ChefOfTheWeekContainer>
  );
};

export default ChefOfTheWeek;

const ChefOfTheWeekContainer = styled.div`
  margin: 20px;
  // margin-bottom: 5px;
`;
const ChefOfTheWeekHeader = styled.div`
  text-align: center;
  font-size: 14px;
  margin-bottom: 15px;
  letter-spacing: 1px;
`;
const ChefImageContainer = styled.div``;

const ChefImage = styled.img`
  width: 100%;
`;

const ChefName = styled.div`
  text-align: center;
  font-size: 24px;
  letter-spacing: 1px;
`;

const ChefNameBackground = styled.div`
  background-color: white;
  height: 50px;
  margin-top: -53px;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ChefDescription = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 13.5px;
  letter-spacing: 1px;
  word-spacing: 1px;
`;
