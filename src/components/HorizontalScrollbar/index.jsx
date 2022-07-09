import { Box } from "@mui/material";
import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import BodyPart from "../BodyPart";
import ExerciseCard from "../ExerciseCard";
import LeftArrow from "../LeftArrow";
import RightArrow from "../RightArrow";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data?.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
          style={{ userSelect: "none" }}
          onClick={() =>
            window.scrollTo({
              top: 0,
            })
          }
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
