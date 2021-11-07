import React, { Dispatch, SetStateAction } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

interface props {
  isMenuShown: boolean;
  setIsMenuShown: Dispatch<SetStateAction<boolean>>;
}

const MenuModal: React.FC<props> = ({ isMenuShown, setIsMenuShown }) => {
  const history = useHistory();

  const onCloseClicked = () => {
    setIsMenuShown(false);
  };
  const onChefsClicked = () => {
    setIsMenuShown(false);
    history.push("/chefs");
  };
  const onRestClicked = () => {
    setIsMenuShown(false);
    history.push("/restaurants");
  };

  return (
    <Modal isShow={isMenuShown}>
      <CloseBackground>
        <Close onClick={() => onCloseClicked()}>X</Close>
      </CloseBackground>
      <TabsContainer>
        <Tab onClick={() => onChefsClicked()}>Chefs</Tab>
        <Tab onClick={() => onRestClicked()}>All Restaurants</Tab>
        <Border />
        <Tab>Sign in</Tab>
        <Tab>Contact us</Tab>
        <Tab>Terms of Use</Tab>
      </TabsContainer>
    </Modal>
  );
};

export default MenuModal;

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

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 50px;
`;

const Border = styled.div`
  width: 45%;
  border: 1px solid black;
`;

const Tab = styled.div`
  font-size: 20px;
  letter-spacing: 1px;
  cursor: pointer;
`;
