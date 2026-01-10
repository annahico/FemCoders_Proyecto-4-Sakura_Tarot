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

  const getRandomCards = async (count = 10) => {
    try {
      const allCards = await getAllCards();
      const shuffled = allCards.sort(() => Math.random() - 0.5).slice(0, count);
      return shuffled;
    } catch (error) {
      console.error("Error obteniendo cartas aleatorias:", error);
      throw error;
    }
  };

  return {
    getAllCards,
    getCardById,
    getRandomCards,
  };
};
