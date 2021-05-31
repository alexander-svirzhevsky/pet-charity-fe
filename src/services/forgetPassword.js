import axios from "axios";

export const postEmail = async ({ email }) => {
  const response = await axios.put("/api/auth/forgot-password", { email });

  return response;
};

export const postNewPass = async ({ resetLink, newPass }) => {
  const response = await axios.put("/api/auth/reset-password", {
    resetLink,
    newPass,
  });

  return response;
};
