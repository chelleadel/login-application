import axios, { AxiosError } from "axios";

const baseUrl = `http://localhost:8080/api/auth`;
// Login
const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(baseUrl + "/signin", {
      username: username,
      password: password,
    });

    if (response.status === 200) {
      // returns an login information
      return response.data;
    } else {
      throw new Error("Unexpected error, try again: " + response.data);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error("Error user login:", axiosError.message);
      throw new Error("Unexpected error, try again: " + axiosError.message);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error, try again: " + error.message);
    }
  }
};

export { login };
