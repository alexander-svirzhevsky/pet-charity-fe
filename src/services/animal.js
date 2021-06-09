import axios from "axios";

export const addType = async (type) => {
  const response = await axios.post("/api/animalType", { type });

  return response;
};

export const addBreed = async ({ breedName, type }) => {
  const response = await axios.post("/api/breed", { breedName, type });

  return response;
};

export const addAnimal = async (formData) => {
  const headers = {
    "Content-Type": "form-data",
  };

  const response = await axios.post("/api/animal", formData, headers);

  return response;
};

export const addProfile = async ({
  name,
  age,
  color,
  size,
  story,
  phone,
  location,
}) => {
  const response = await axios.post("/api/profile", {
    name,
    age,
    color,
    size,
    story,
    phone,
    location,
  });

  return response;
};
