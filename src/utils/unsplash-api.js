import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
const ACCESS_KEY = 'OgfDvHFl_T6LY9Vhko37JBCxPGr2pfGeirggxNgVGLA';

export const fetchImagesWithQuery = async (query, page) => {
    const response = await axios.get(
        `/search/photos/?client_id=${ACCESS_KEY}&query=${query}&orientation=landscape&per_page=15&page=${page}`)
    return response.data.results;
};