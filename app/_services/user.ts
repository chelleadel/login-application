import axios, { AxiosError } from "axios";

const baseUrl = `http://localhost:8080/api/home`;

const getAllData = async (token: string) => {
  try {
    const response = await axios.get(baseUrl + "/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      // returns backend data
      return response.data;
    } else {
      throw new Error("Invalid user type: " + response.data);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error("Error:", axiosError.message);
      throw new Error("Unexpected error, try again: " + axiosError.message);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error, try again: " + error.message);
    }
  }
};

const getUserData = async (token: string) => {
  try {
    const response = await axios.get(baseUrl + "/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      // returns backend data
      return response.data;
    } else {
      console.log("Invalid user type: " + response.data.message);
      throw new Error("Invalid user type: " + response.data.message);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error("Error:", axiosError.message);
      throw new Error("Unexpected error, try again: " + axiosError.message);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error, try again: " + error.message);
    }
  }
};

const getManagerData = async (token: string) => {
  try {
    const response = await axios.get(baseUrl + "/manager", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      // returns an authentication token
      return response.data;
    } else {
      throw new Error("Invalid user type: " + response.data);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error("Error:", axiosError.message);
      throw new Error("Unexpected error, try again: " + axiosError.message);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error, try again: " + error.message);
    }
  }
};

export { getAllData, getManagerData, getUserData };
