import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Loader from "../Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  const showMaximumVideos = 6;

  return (
    <Box
      sx={{
        marginTop: {
          lg: "203px",
          xs: "20px",
        },
      }}
      p="20px"
    >
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{" "}
        <span
          style={{
            color: "#ff2625",
            textTransform: "capitalize",
          }}
        >
          {name}
        </span>{" "}
        exercise video{showMaximumVideos > 1 && "s"}
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
      >
        {exerciseVideos?.slice(0, showMaximumVideos).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              style={{ borderTopLeftRadius: "30px" }}
            />
            <Box>
              <Typography variant="subtitle1" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="subtitle2" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
