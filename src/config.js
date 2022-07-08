// Configuration for Rapid API
// Read more about the API here: https://rapidapi.com/hub

const API_URL = "https://exercisedb.p.rapidapi.com";
const API_KEY = process.env.REACT_APP_X_RAPID_API_KEY;
const API_HOST = "exercisedb.p.rapidapi.com";

const EXERCISES_BASE_URL = `${API_URL}/exercises`;
const BODY_PART_LIST_BASE_URL = `${EXERCISES_BASE_URL}/bodyPartList`;
const BODY_PART_BASE_URL = `${EXERCISES_BASE_URL}/bodyPart`;

export {
  API_URL,
  API_KEY,
  API_HOST,
  EXERCISES_BASE_URL,
  BODY_PART_LIST_BASE_URL,
  BODY_PART_BASE_URL,
};
