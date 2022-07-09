// Configuration for Rapid API
// Read more about the API here: https://rapidapi.com/hub

const API_URL = "https://exercisedb.p.rapidapi.com";
const YOUTUBE_API_URL = "https://youtube-search-and-download.p.rapidapi.com";

const API_KEY = process.env.REACT_APP_X_RAPID_API_KEY;

const API_HOST = "exercisedb.p.rapidapi.com";
const YOUTUBE_API_HOST = "youtube-search-and-download.p.rapidapi.com";

const EXERCISES_BASE_URL = `${API_URL}/exercises`;
const BODY_PART_LIST_BASE_URL = `${EXERCISES_BASE_URL}/bodyPartList`;
const BODY_PART_BASE_URL = `${EXERCISES_BASE_URL}/bodyPart`;
const EXERCISES_BY_ID_BASE_URL = `${EXERCISES_BASE_URL}/exercise`;
const TARGET_MUSCLE_BASE_URL = `${EXERCISES_BASE_URL}/target`;
const EQUIPMENT_EXERCISES_BASE_URL = `${EXERCISES_BASE_URL}/equipment`;

const YOUTUBE_SEARCH_BASE_URL = `${YOUTUBE_API_URL}/search?query=`;

export {
  API_URL,
  YOUTUBE_API_URL,
  API_KEY,
  API_HOST,
  YOUTUBE_API_HOST,
  EXERCISES_BASE_URL,
  BODY_PART_LIST_BASE_URL,
  BODY_PART_BASE_URL,
  EXERCISES_BY_ID_BASE_URL,
  YOUTUBE_SEARCH_BASE_URL,
  TARGET_MUSCLE_BASE_URL,
  EQUIPMENT_EXERCISES_BASE_URL,
};
