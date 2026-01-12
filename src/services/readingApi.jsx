import axios from "axios";

export const readingApi = () => {
  const url = "http://localhost:3000/readings";

  const createReadableDate = () => {
    const now = new Date();
    return now.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const createReadingObject = (userId, username, cards) => {
    return {
      userId: userId,
      username: username,
      date: createReadableDate(),
      cards: {
        past: cards.past,
        present: cards.present,
        future: cards.future,
      },
    };
  };

  const saveReading = async (userId, username, cards) => {
    try {
      const newReading = createReadingObject(userId, username, cards);
      const response = await axios.post(url, newReading);
      return response.data;
    } catch (error) {
      console.error("Error en saveReading:", error.message);
      throw error;
    }
  };

  const getReadingByUserId = async (userId) => {
    try {
      const response = await axios.get(`${url}?userId=${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error en getReadingsByUserId:", error.message);
      throw error;
    }
  };

  return {
    createReadableDate,
    createReadingObject,
    saveReading,
    getReadingByUserId,
  };
};
