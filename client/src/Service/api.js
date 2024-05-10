import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const saveInvoice = async (payload) => {
  try{
    return await axios.post(`http://localhost:8080/invoice`, payload);
  } catch (error) {
    console.log('Error: ', error.message);
    return error.response.data;
  }
}