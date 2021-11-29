import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Link>Contact us</Link>
      <Link>Term of Use</Link>
      <Link>Privacy Policy</Link>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  gap: 15px;
  border-top: 1px solid;
  border-top-color: lightgrey;
  margin-top: 20px;
  @media (min-width: 600px) {
    flex-direction: row;
    gap: 30px;
  }
`;

const Link = styled.div`
  font-size: 13px;
  text-align: center;
  letter-spacing: 1px;
  cursor: pointer;
  @media (min-width: 800px) {
    font-size: 18px;
  }
`;
