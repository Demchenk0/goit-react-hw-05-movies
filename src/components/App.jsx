import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { Home } from '../Pages/Home/Home';
import { Movies } from '../Pages/Movies/Movies';

import { MoviesDetails } from '../components/MovieDetails/MovieDetails';
import { Cast } from '../components/Cast/Cast';
import { Reviews } from '../components/Reviews/Reviews';

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="movies" element={<Movies />} />
				<Route path="movies/:movieId" element={<MoviesDetails />}>
					<Route path="cast" element={<Cast />} />
					<Route path="reviews" element={<Reviews />} />
				</Route>
				<Route path="*" element={<p>Not Found</p>}></Route>
			</Route>
		</Routes>
	);
};
