// src/services/dishService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/dishes';

export const fetchDishes = async () => {
  const response = await axios.get(API_URL);
  console.log(response)
  return response.data;
};

export const toggleDishPublished = async (id) => {
  const response = await axios.patch(`${API_URL}/${id}/toggle`);
  return response.data;
};
