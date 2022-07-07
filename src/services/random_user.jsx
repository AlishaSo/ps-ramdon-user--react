import axios from 'axios';

const BASE_URL = 'https://api.randomuser.me';

async function fetchUser() {
  try {
    let response = await axios.get(`${BASE_URL}`);
    return response.data.results[0];
  } catch (error) {
    console.error(error)
  }
}

export default fetchUser;