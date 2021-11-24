import React, { useState } from "react";
import styled from "styled-components";
import { AppBaseUrl } from "../api";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { dishActions } from "../redux/slice/dish.slice";
import { displayActions } from "../redux/slice/display-slice";

const DishMobileModal: React.FC = () => {
  const [counter, setCounter] = useState<number>(1);
  const showDish = useAppSelector((state) => state.display.showDish);
  const dish = useAppSelector((state) => state.dish.dish);
  const dispatch = useAppDispatch();

  const onCloseClick = () => {
    dispatch(dishActions.setdish(undefined));
    dispatch(displayActions.setShowDish(false));
  };

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

  // const addToBagHandler = (e: any) => {
  //   e.preventDefault();
  //   console.log(e.target);
  // };

  return (
    <Modal isShow={showDish}>
      <CloseBackground>
        <Close onClick={() => onCloseClick()}>X</Close>
      </CloseBackground>
      <DishModalContainer>
        <DishImage src={AppBaseUrl + dish?.image} />
        <DishDetails>
          <DishName>{dish?.name}</DishName>
          <DishDescription>{dish?.ingredients}</DishDescription>
          <DishIconsContainer>
            <DishIcon src={AppBaseUrl + "assets/icons/spicy-icon@2x.png"} />
            <DishIcon src={AppBaseUrl + "assets/icons/spicy-icon@2x.png"} />
          </DishIconsContainer>
          <DishPrice>{dish?.price}</DishPrice>
        </DishDetails>
        <Header>Choose a side</Header>
        <OptionsContainer>
          <OptionContainer>
            <Option type="radio" name="option" defaultChecked />
            <Label>With Bread</Label>
          </OptionContainer>
          <OptionContainer>
            <Option type="radio" name="option" />
            <Label>Sticky Rice</Label>
          </OptionContainer>
        </OptionsContainer>
        <Header>Changes</Header>
        <OptionsContainer>
          <OptionContainer>
            <Option type="checkbox" />
            <Label>Without Onoin</Label>
          </OptionContainer>
          <OptionContainer>
            <Option type="checkbox" />
            <Label>Without Peanuts</Label>
          </OptionContainer>
          <OptionContainer>
            <Option type="checkbox" />
            <Label>Less Spicy</Label>
          </OptionContainer>
        </OptionsContainer>
        <Header>Quantity</Header>
        <CounterContainer>
          <Decrement onClick={decrementHandler}>-</Decrement>
          <Counter>{counter}</Counter>
          <Increment onClick={incrementHandler}>+</Increment>
        </CounterContainer>
        <BagButton onSubmit={() => onCloseClick()}>ADD TO BAG</BagButton>
      </DishModalContainer>
    </Modal>
  );
};

export default DishMobileModal;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 100;
  left: ${(props: { isShow: boolean }) => (props.isShow ? "50%" : "-100%")};
  top: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  transition: left 0.7s;
  transform: translate(-50%, -50%);
`;

const CloseBackground = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  height: 47px;
`;

const Close = styled.div`
  width: 20px;
  height: 20px;
  text-align: center;
  color: #aaa;
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
  cursor: pointer;
`;

const DishModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
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
  font-weight: 400;
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
