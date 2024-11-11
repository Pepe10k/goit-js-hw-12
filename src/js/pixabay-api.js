import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '46892325-00c25f1fa799ccb760ac92d85';

export const fetchImages = async (query, page = 1, perPage = 15) => {
  try {
    const response = await axios.get(URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page,
        per_page: perPage,
      },
    });
    return { hits: response.data.hits, totalHits: response.data.totalHits };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { hits: [], totalHits: 0 };
  }
};
