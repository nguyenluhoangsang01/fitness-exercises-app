import { Stack } from "@mui/material";
import React from "react";
import { Rings } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent="center"
      alignItems={"center"}
      width="100%"
    >
      <Rings height="100" width="100" color="#ff2625" ariaLabel="loading" />
    </Stack>
  );
};

export default Loader;
