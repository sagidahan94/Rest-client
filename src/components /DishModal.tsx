import React from "react";
import { useMediaQuery } from "react-responsive";
import DishDesktopModal from "./DishDesktopModal";
import DishMobileModal from "./DishMobileModal";

const DishModal: React.FC = () => {
  const isDesktopScreen = useMediaQuery({ query: "(min-width: 600px)" });

  return (
    <>
      {isDesktopScreen ? (
        <>
          <DishDesktopModal />
        </>
      ) : (
        <>
          <DishMobileModal />
        </>
      )}
    </>
  );
};

export default DishModal;
