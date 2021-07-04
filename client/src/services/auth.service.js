const axiosInstance = require("../utilities/axiosInstance");
const url = process.env.BACKEND_URL || "http://localhost:8000/";

const login = async (email, password) => {
  return await axiosInstance
    .post(url + "login", {
      email,
      password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

const register = async (username, email, password) => {
  return await axiosInstance
    .post(url + "signup", {
      email,
      password,
      username,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

const logout = async () => {
  return await axiosInstance.get(url + "logout").then((response) => {
    return response.data;
  });
};

module.exports = { login, register, logout };
