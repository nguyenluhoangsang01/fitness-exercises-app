import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BODY_PART_LIST_BASE_URL, EXERCISES_BASE_URL } from "../../config";
import { exerciseDBOptions, fetchData } from "../../utils/fetchData";
import HorizontalScrollbar from "../HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        BODY_PART_LIST_BASE_URL,
        exerciseDBOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, [setBodyParts]);

  const handleSearch = async () => {
    if (searchTerm) {
      const exercisesData = await fetchData(
        EXERCISES_BASE_URL,
        exerciseDBOptions
      );

      const searchedExercisesData = exercisesData.filter(
        (exercise) =>
          exercise.bodyPart.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exercise.gifUrl.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exercise.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exercise.target.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setExercises(searchedExercisesData);
      setSearchTerm("");
    }
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises <br />
        Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={searchTerm}
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={(e) => handleKeyEnter(e)}
          label="Search Exercises"
          variant="outlined"
          sx={{
            input: {
              fontWeight: "500",
              paddingRight: {
                lg: "195px",
                xs: "100px",
              },
            },
            width: {
              lg: "1170px",
              xs: "550px",
            },
            backgroundColor: "#fff",
          }}
          style={{
            caretColor: "#FF2625",
          }}
        />
        <Button
          sx={{
            height: "54px",
            margin: "1px 1px 0 0",
            backgroundColor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            width: {
              lg: "175px",
              xs: "80px",
            },
            fontSize: {
              lg: "20px",
              xs: "14px",
            },
            position: "absolute",
            right: 0,
          }}
          className="search-btn"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
