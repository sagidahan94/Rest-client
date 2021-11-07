import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../Layout";

function DishPage() {
  const [counter, setCounter] = useState<number>(1);

  const incrementHandler = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  const decrementHandler = () => {
    if (counter > 1) {
      const newCounter = counter - 1;
      setCounter(newCounter);
    }
  };

  const addToBagHandler = (e: any) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <DishPageContainer>
      <DishImage src="assets/dishes/pad-ki-mao.png" />
      <DishDetails>
        <DishName>Pad Ki Mao</DishName>
        <DishDescription>
          Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic
          Chili Brown Coconut
        </DishDescription>
        <DishIconsContainer>
          <DishIcon src="assets/icons/spicy.svg" />
          <DishIcon src="assets/icons/spicy.svg" />
        </DishIconsContainer>
        <DishPrice>₪88</DishPrice>
      </DishDetails>
      <Header>Choose a side</Header>
      <OptionsContainer>
        <OptionContainer>
          <Option type="radio" name="option" defaultChecked></Option>
          <Label>With Bread</Label>
        </OptionContainer>
        <OptionContainer>
          <Option type="radio" name="option"></Option>
          <Label>Sticky Rice</Label>
        </OptionContainer>
      </OptionsContainer>
      <Header>Changes</Header>
      <OptionsContainer>
        <OptionContainer>
          <Option type="checkbox"></Option>
          <Label>Without Onoin</Label>
        </OptionContainer>
        <OptionContainer>
          <Option type="checkbox"></Option>
          <Label>Without Peanuts</Label>
        </OptionContainer>
        <OptionContainer>
          <Option type="checkbox"></Option>
          <Label>Less Spicy</Label>
        </OptionContainer>
      </OptionsContainer>
      <Header>Quantity</Header>
      <CounterContainer>
        <Decrement onClick={decrementHandler}>-</Decrement>
        <Counter>{counter}</Counter>
        <Increment onClick={incrementHandler}>+</Increment>
      </CounterContainer>
      <BagButton onSubmit={addToBagHandler}>ADD TO BAG</BagButton>
    </DishPageContainer>
  );
}

export default DishPage;

const DishPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DishImage = styled.img`
  width: 100%;
  height: 250px;
`;

const DishDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 60%;
  gap: 8px;
  margin-top: 20px;
`;

const DishName = styled.div`
  font-size: 25px;
`;

const DishDescription = styled.div`
  text-align: center;
  font-size: 17px;
  letter-spacing: 0.7px;
  word-spacing: 0.1px;
`;

const DishIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const DishIcon = styled.img`
  width: 32px;
  height: 24px;
`;

const DishPrice = styled.div`
  font-size: 20px;
`;

const Header = styled.div`
  font-size: 17px;
  letter-spacing: 1px;
  border-bottom: 1px solid orange;
  margin-top: 40px;
  margin-bottom: 25px;
`;

const OptionsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Label = styled.div`
  font-size: 15px;
`;

const Option = styled.input``;

const CheckBox = styled.input``;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const Increment = styled.button`
  border: none;
  background: white;
  font-size: 20px;
`;

const Decrement = styled.button`
  border: none;
  background: white;
  font-size: 20px;
`;

const Counter = styled.div`
  font-size: 20px;
`;

const BagButton = styled.button`
  background: black;
  color: white;
  font-size: 18px;
  padding: 7px 30px;
  margin-top: 90px;
  margin-bottom: 30px;
`;
