import axios from 'axios';
const BASE_URL = "https://courageous-goat-slip.cyclic.app/api";

export default axios.create({
  baseURL: BASE_URL,
});
