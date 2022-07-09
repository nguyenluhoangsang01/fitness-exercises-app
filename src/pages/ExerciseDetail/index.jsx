import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../../components/Detail";
import ExerciseVideos from "../../components/ExerciseVideos";
import SimilarExercises from "../../components/SimilarExercises";
import {
  EQUIPMENT_EXERCISES_BASE_URL,
  EXERCISES_BY_ID_BASE_URL,
  TARGET_MUSCLE_BASE_URL,
  YOUTUBE_SEARCH_BASE_URL,
} from "../../config";

import {
  exerciseDBOptions,
  fetchData,
  youtubeOptions,
} from "../../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDetailData = await fetchData(
        `${EXERCISES_BY_ID_BASE_URL}/${id}`,
        exerciseDBOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${YOUTUBE_SEARCH_BASE_URL}${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${TARGET_MUSCLE_BASE_URL}/${exerciseDetailData.target}`,
        exerciseDBOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(
        `${EQUIPMENT_EXERCISES_BASE_URL}/${exerciseDetailData.equipment}`,
        exerciseDBOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
