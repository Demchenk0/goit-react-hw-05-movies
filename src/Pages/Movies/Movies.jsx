import { Suspense } from 'react';

import { getSearchMovies } from 'Api/Api';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Outlet } from 'react-router-dom';
import {
	MoviesList,
	MoviesLink,
	MoviesImg,
	MoviesForm,
	MoviesInput,
	MoviesButton,
} from './Movies.styled';

export const Movies = () => {
	const [searchQuery, setSearchQuery] = useState(null);
	const [searchParams, setSearchParams] = useSearchParams();
	const [arrayFilm, setArrayFilm] = useState([]);
	const location = useLocation();

	const [btnDisabled, setBtnDisabled] = useState(true);

	// todo передача с импута в поисковую строку***

	const query = searchParams.get('filmQuery');
	const handleSearchQuery = e => {
		setBtnDisabled(false);
		const filmQuery = e.target.value;
		setSearchQuery(filmQuery !== '' ? { filmQuery } : {});
	};
	console.log(searchQuery);
	const hanleFormSubmit = event => {
		event.preventDefault();
		if (!searchQuery) {
			setBtnDisabled(true);
		}
		setSearchParams(searchQuery);

		event.target.reset();
	};
	console.log(query);
	console.log('arrayFilm', arrayFilm);

	useEffect(() => {
		if (query) {
			getSearchMovies(query).then(({ data }) => {
				setArrayFilm(data.results);
			});
		}
	}, [query]);
	return (
		<>
			<MoviesForm onSubmit={hanleFormSubmit}>
				<MoviesInput type="text" onChange={handleSearchQuery} />
				<MoviesButton disabled={btnDisabled} type="submit">
					Search
				</MoviesButton>
			</MoviesForm>
			{/* {arrayFilm?.length < 1 && !null && <p>Enter the movie titles</p>} */}

			<MoviesList>
				{arrayFilm?.length ? (
					arrayFilm.map(({ id, poster_path, title }, index) => {
						const blockImage = poster_path
							? `http://image.tmdb.org/t/p/w500${poster_path}`
							: `https://socialvk.ru/800/600/https/mapsrb.ru/magistration/img/2432-oshibka-4-vk.jpg`;
						return (
							<MoviesLink
								key={index}
								to={`/movies/${id}`}
								state={{ from: location }}
							>
								<li>
									<MoviesImg src={blockImage} alt={title} />
									<p>{title}</p>
								</li>
							</MoviesLink>
						);
					})
				) : (
					<li>Enter the movie titles</li>
				)}
			</MoviesList>
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</>
	);
};
