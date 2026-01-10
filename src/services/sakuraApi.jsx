import axios from "axios";

export const sakuraApi = () => {
  const url = "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards";

  const getAllCards = async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error en getAllCards:", error.message);
      throw error;
    }
  };

  const getCardById = async (id) => {
    try {
      const response = await axios.get(`${url}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error en getCardById:", error.message);
      throw error;
    }
  };

  return {
    getAllCards,
    getCardById,
  };
};
