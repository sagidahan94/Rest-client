import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      {/* <LinksContainer> */}
      <Link>Contact us</Link>
      <Link>Term of Use</Link>
      <Link>Privacy Policy</Link>
      {/* </LinksContainer> */}
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  gap: 15px;
  border-top: 1px solid;
  border-top-color: lightgrey;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const Link = styled.div`
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
  cursor: pointer;
`;
