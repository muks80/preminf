import axios from 'axios';

  export default axios.create({
    baseURL: 'https://api-football-v1.p.rapidapi.com/v2/',
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_X_RAPIDAPI_KEY,
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
    }
  });