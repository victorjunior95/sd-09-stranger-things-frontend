import axios from 'axios';

require('dotenv/config');

// const DEFAULT_TIMEOUT = 30000;
class CharactersService {
  constructor({ url = 'http://localhost:3000', timeout = process.env.REACT_APP_HAWKINS_TIMEOUT }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;