import axios from "axios";

export const addType = async (type) => {
  const response = await axios.post("/api/animalType", { type });
  return response;
};

export const addBreed = async ({ breedName, type }) => {
  const response = await axios.post("/api/breed", { breedName, type });

  return response;
};

export const addAnimal = async ({ name, sex, breedName, type }) => {
  const response = await axios.post("/api/animal", {
    name,
    sex,
    breedName,
    type,
  });

  return response;
};

export const addProfile = async ({ name, age, color, size, story }) => {
  const response = await axios.post("/api/profile", {
    name,
    age,
    color,
    size,
    story,
  });

  return response;
};
