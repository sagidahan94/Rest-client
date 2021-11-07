import React from "react";
import styled from "styled-components";

function About() {
  return (
    <AboutBackground>
      <AboutContainer>
        <ContentIconContainer>
          <ContentContainer>
            <AboutHeader>ABOUT US :</AboutHeader>
            <AboutContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              lacus vel justo fermentum bibendum non eu ipsum. Cras porta
              malesuada eros, eget blandit turpis suscipit at. Vestibulum sed
              massa in magna sodales porta. Vivamus elit urna, dignissim a
              vestibulum.
              <br />
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              a lacus vel justo fermentum bibendum non eu ipsum. Cras porta
              malesuada eros, eget blandit turpis suscipit at. Vestibulum sed
              massa in magna sodales porta. Vivamus elit urna, dignissim a
              vestibulum.
            </AboutContent>
          </ContentContainer>
          <EpicureIcon />
        </ContentIconContainer>
        <StoreContainer>
          <AppStoreContainer>
            <AppleIcon></AppleIcon>
            <AppleText>
              Download on the <br /> App Store
            </AppleText>
          </AppStoreContainer>
          <GooglePlayContainer>
            <PlayIcon></PlayIcon>
            <GoogleText>
              Get it on <br />
              Google Play
            </GoogleText>
          </GooglePlayContainer>
        </StoreContainer>
      </AboutContainer>
    </AboutBackground>
  );
}

export default About;

const AboutBackground = styled.div`
  background-color: #fafafa;
  margin-top: 100px;
  width: 100%;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  @media (min-width: 600px) {
    align-items: flex-start;
    padding: 40px 100px;
  }
`;

const ContentIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media (min-width: 600px) {
    flex-direction: row;
    gap: 100px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media (min-width: 600px) {
    align-items: flex-start;
    width: 55%;
  }
`;

const AboutHeader = styled.div`
  font-size: 14px;
  @media (min-width: 600px) {
    font-size: 30px;
  }
`;

const AboutContent = styled.div`
  font-size: 14px;
  text-align: center;
  letter-spacing: 1px;
  @media (min-width: 600px) {
    font-size: 22px;
    text-align: left;
  }
`;

const EpicureIcon = styled.div`
  width: 137px;
  height: 128px;
  background: url("assets/icons/epicure-footer.png");
  background-size: 137px 128px;
`;

const StoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 30px;
`;

const AppStoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  border: 1px solid;
  border-radius: 5px;
  padding: 7px 7px;
  gap: 10px;
`;

const GooglePlayContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  border: 1px solid;
  border-radius: 5px;
  padding: 7px 7px;
  gap: 10px;
`;

const AppleIcon = styled.div`
  width: 17px;
  height: 21px;
  background: url("assets/icons/apple.svg");
  background-size: 17px 21px;
`;

const PlayIcon = styled.div`
  width: 14px;
  height: 18px;
  background: url("assets/icons/play.svg");
  background-size: 14px 18px;
`;

const AppleText = styled.div`
  font-size: 9px;
  letter-spacing: 1px;
`;

const GoogleText = styled.div`
  font-size: 9px;
  letter-spacing: 1px;
`;
