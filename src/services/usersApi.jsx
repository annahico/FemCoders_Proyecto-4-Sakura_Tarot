import axios from "axios";

export const usersApi = () => {
  const url = "http://localhost:3000/users";

  const createReadableDate = () => {
    const now = new Date();
    return now.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const createUserObject = (userData, createdAt) => {
    return {
      username: userData.username,
      email: userData.email,
      password: userData.password,
      createdAt: createdAt,
    };
  };

  const verifyPassword = (inputPassword, storedPassword) => {
    return inputPassword === storedPassword;
  };

  const getUserByEmail = async (email) => {
    try {
      const response = await axios.get(`${url}?email=${email}`);
      return response.data.length > 0 ? response.data[0] : null;
    } catch (error) {
      console.error("Error en getUserByEmail:", error.message);
      throw error;
    }
  };

  const doesEmailExist = async (email) => {
    try {
      const user = await getUserByEmail(email);
      return user !== null;
    } catch (error) {
      console.error("Error en doesEmailExist:", error.message);
      throw error;
    }
  };

  const loginUser = async (email, password) => {
    try {
      const user = await getUserByEmail(email);

      if (!user) {
        throw new Error("Usuario no encontrado");
      }

      const isPasswordValid = verifyPassword(password, user.password);

      if (!isPasswordValid) {
        throw new Error("Contraseña incorrecta");
      }

      return user;
    } catch (error) {
      console.error("Error en loginUser:", error.message);
      throw error;
    }
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

  const authenticateUser = async (userData) => {
    try {
      const existingUser = await getUserByEmail(userData.email);

      if (!existingUser) {
        console.log("Email nuevo, registrando usuario...");

        const createdAt = createReadableDate();
        const newUser = createUserObject(userData, createdAt);
        const response = await axios.post(url, newUser);

        return response.data;
      }

      console.log("Email existe, haciendo login...");

      const isPasswordValid = verifyPassword(userData.password, existingUser.password);

      if (!isPasswordValid) {
        throw new Error("Contraseña incorrecta");
      }

      return existingUser;
    } catch (error) {
      console.error("Error en authenticateUser:", error.message);
      throw error;
    }
  };

  return {
    authenticateUser,
    registerUser,
    loginUser,
    doesEmailExist,
    getUserByEmail,
    createReadableDate,
  };
};
