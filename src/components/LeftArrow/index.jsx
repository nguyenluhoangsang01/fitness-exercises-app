import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import LeftArrowIcon from "../../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

export default LeftArrow;
