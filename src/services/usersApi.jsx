import axios from "axios";

export const usersApi = () => {
  const url = "http://localhost:3000/users";

  const doesEmailExist = async (email) => {
    try {
      const response = await axios.get(`${url}?email=${email}`);
      return response.data.length > 0;
    } catch (error) {
      console.error("Error en doesEmailExist:", error.message);
      throw error;
    }
  };

  const createReadableDate = () => {
    const now = new Date();
    return now.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const createUserObject = (userData, id, createdAt) => {
    return {
      id: id,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      createdAt: createdAt,
    };
  };

  const registerUser = async (userData) => {
    try {
      const emailExists = await doesEmailExist(userData.email);

      if (emailExists) {
        throw new Error("El email ya está registrado");
      }

      const readableDate = createReadableDate();
      const newUser = createUserObject(userData, readableDate);
      const response = await axios.post(url, newUser);

      return response.data;
    } catch (error) {
      console.error("Error en registerUser:", error.message);
      throw error;
    }
  };

  return {
    doesEmailExist,
    createReadableDate,
    createUserObject,
    registerUser,
  };
};
