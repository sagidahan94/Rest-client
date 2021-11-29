import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { AppBaseUrl } from "../api";
import MenuModal from "./MenuModal";

const SearchPlaceHolder = "Search for resturatns cuisine, chef";

const NavbarMobile: React.FC = () => {
  const history = useHistory();
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

  const onMenuClicked = () => {
    setIsMenuShown(true);
  };

  const onHomeIconClicked = () => {
    history.push("/home");
  };

  return (
    <Navbar>
      <Menu onClick={() => onMenuClicked()}></Menu>
      <HomeIcon onClick={() => onHomeIconClicked()}></HomeIcon>
      <RightNav>
        <SearchInput placeholder={SearchPlaceHolder} />
        <Profile />
        <Bag />
      </RightNav>
      <MenuModal isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
    </Navbar>
  );
};

export default NavbarMobile;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  margin-bottom: 8px;
  padding: 10px 5px 0px 5px;
`;

const HomeIcon = styled.button`
  width: 31px;
  height: 29.6px;
  background: url("${AppBaseUrl}assets/icons/epicure-icon.png");
  background-size: 31px 29.6px;
  margin-left: 75px;
  border: none;
`;

const Menu = styled.button`
  width: 20px;
  height: 18px;
  background: url("${AppBaseUrl}assets/icons/menu.svg");
  background-size: 20px 18px;
  border: none;
  margin-left: 15px;
`;

const RightNav = styled.div`
  display: flex;
  justify-content: left;
  margin-right: 15px;
  gap: 15px;
`;

const SearchInput = styled.input`
  display: block;
  width: 18px;
  height: 18px;
  padding-right: 20px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 10px;
  background-color: white;
  background: url("${AppBaseUrl}assets/icons/search.svg");
  background-size: 18px 18px;
  background-position: right;
  border: none;
  background-repeat: no-repeat;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  :focus {
    width: 100px;
  }
`;

const Profile = styled.button`
  width: 18px;
  height: 18px;
  background: url("${AppBaseUrl}assets/icons/profile.svg");
  background-size: 18px 18px;
  border: none;
`;
const Bag = styled.button`
  width: 18px;
  height: 18px;
  background: url("${AppBaseUrl}assets/icons/bag.svg");
  background-size: 18px 18px;
  border: none;
`;
