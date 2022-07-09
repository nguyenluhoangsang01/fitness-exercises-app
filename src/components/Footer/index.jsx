import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/images/Logo-1.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="10px" alignItems={"center"} px="40px" pt="24px">
        <img src={Logo} alt="Logo" width={"200px"} height={"40px"} />
        <Typography variant="subtitle2" pb="40px" mt="20px">
          © Copyright {year} nguyenluhoangsang.edu.vn. All rights reserved
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
