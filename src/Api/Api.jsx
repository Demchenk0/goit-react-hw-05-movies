// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&page=1

import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = '4011fa8e17c3cf2b74c3654f226f8a87';

export const getTrendingMovies = () => {
	return axios.get(`trending/movie/week?api_key=${KEY}`);
};
export const getDetailsMovies = movie_id => {
	return axios.get(`movie/${movie_id}?api_key=${KEY}`);
};
export const getCastMovies = movie_id => {
	return axios.get(`movie/${movie_id}/credits?api_key=${KEY}`);
};
export const getReviewsMovies = movie_id => {
	return axios.get(`movie/${movie_id}/reviews?api_key=${KEY}`);
};
