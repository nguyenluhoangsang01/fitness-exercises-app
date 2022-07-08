import { Box } from "@mui/material";
import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import BodyPart from "../BodyPart";
import LeftArrow from "../LeftArrow";
import RightArrow from "../RightArrow";

const HorizontalScrollbar = ({ bodyParts, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {bodyParts?.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
          style={{ userSelect: "none" }}
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
