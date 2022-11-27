// For Real App, Move it to .env file
const API_KEY = 'cf13c35b0e63fa6d3bf99c42d7146fde';

export const fetchAll = async type => {
  const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&include_adult=false`;
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const fetchAllBySearch = async searchTerm => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&include_adult=false`;
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const fetchById = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
