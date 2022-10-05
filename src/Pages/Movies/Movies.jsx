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

	// todo передача с импута в поисковую строку***

	const query = searchParams.get('filmQuery');
	const handleSearchQuery = e => {
		const filmQuery = e.target.value;
		setSearchQuery(filmQuery !== '' ? { filmQuery } : {});
	};
	console.log(searchQuery);
	const hanleFormSubmit = event => {
		event.preventDefault();
		setSearchParams(searchQuery);
		event.target.reset();
	};
	console.log(query);
	console.log('arrayFilm', arrayFilm);
	useEffect(() => {
		if (!query) {
			console.log(query);
			return;
		}
		getSearchMovies(query).then(({ data }) => {
			setArrayFilm(data.results);
		});
	}, [query]);
	return (
		<>
			<MoviesForm onSubmit={hanleFormSubmit}>
				<MoviesInput type="text" onChange={handleSearchQuery} />
				<MoviesButton type="submit">Search</MoviesButton>
			</MoviesForm>
			<MoviesList>
				{arrayFilm &&
					arrayFilm.map(({ id, poster_path, title }) => {
						return (
							<MoviesLink
								key={poster_path}
								to={`/movies/${id}`}
								state={{ from: location }}
							>
								<li>
									<MoviesImg
										src={`http://image.tmdb.org/t/p/w500${poster_path}`}
										alt={title}
									/>
									<p>{title}</p>
								</li>
							</MoviesLink>
						);
					})}
			</MoviesList>
			<Outlet />
		</>
	);
};
