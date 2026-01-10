import axios from "axios";

export const sakuraApi = () => {
  const url = "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards";

  const getAllCards = async () => {
    const response = await axios.get(url);
    return response.data;
  };

  const getCardById = async (id) => {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  };
  return {
    getAllCards,
    getCardById,
  };
};
