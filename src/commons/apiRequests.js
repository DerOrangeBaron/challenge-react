import { baseUrl } from "../config";

const getCharacters = async (page) => {
  const response = await fetch(`${baseUrl}/character/?page=${page}`);
  const data = await response.json();
  return data;
};

const getCharacter = async (id) => {
  const response = await fetch(`${baseUrl}/character/${id}`);
  const data = await response.json();
  return data;
};

export default {
  getCharacters,
  getCharacter,
};
