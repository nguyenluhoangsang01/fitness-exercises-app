import { Box, Pagination, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BODY_PART_BASE_URL, EXERCISES_BASE_URL } from "../../config";
import { exerciseDBOptions, fetchData } from "../../utils/fetchData";
import ExerciseCard from "../ExerciseCard";
import Loader from "../Loader";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  useEffect(() => {
    const fetchExercisesData = async () => {
      if (bodyPart === "all") {
        setExercises(await fetchData(EXERCISES_BASE_URL, exerciseDBOptions));
      } else {
        setExercises(
          await fetchData(
            `${BODY_PART_BASE_URL}/${bodyPart}`,
            exerciseDBOptions
          )
        );
      }
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({
      top: 1800,
    });
  };

  return (
    <Box
      id="exercises"
      mt="50px"
      p="20px"
      sx={{
        mt: {
          lg: "80px",
        },
      }}
    >
      <Typography variant="h3">Showing Results</Typography>
      <Stack
        direction={"row"}
        flexWrap="wrap"
        justifyContent={"center"}
        sx={{
          gap: {
            lg: "110px",
            xs: "50px",
          },
          mt: "40px",
        }}
      >
        {currentExercises ? (
          currentExercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))
        ) : (
          <Loader />
        )}
      </Stack>
      <Stack mt="100px" alignItems={"center"}>
        {exercises.length > exercisesPerPage && (
          <Pagination
            variant="outlined"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            size="large"
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
