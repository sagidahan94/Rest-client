import React from "react";
import styled from "styled-components";

const LoadingPage: React.FC = () => {
  return (
    <LoadingPageContainer>
      <Loader />;
    </LoadingPageContainer>
  );
};

export default LoadingPage;
const LoadingPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  @media (min-width: 800px) {
    height: 630px;
  }
`;
const Loader = styled.div`
  margin: auto;
  border: 20px solid #eaf0f6;
  border-radius: 50%;
  border-top: 20px solid #ff7a59;
  width: 80px;
  height: 80px;
  animation: spinner 4s linear infinite;
  @media (min-width: 800px) {
    width: 200px;
    height: 200px;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
