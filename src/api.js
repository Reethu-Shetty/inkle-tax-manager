import axios from "axios";

const BASE_URL = "https://685013d7e7c42cfd17974a33.mockapi.io";

export async function getTaxes() {
  const res = await axios.get(`${BASE_URL}/taxes`);
  return res.data;
}

export async function getCountries() {
  const res = await axios.get(`${BASE_URL}/countries`);
  return res.data;
}

export async function updateTax(id, updatedData) {
  const res = await axios.put(`${BASE_URL}/taxes/${id}`, updatedData);
  return res.data;
}