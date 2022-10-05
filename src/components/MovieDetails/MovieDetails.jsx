import { getDetailsMovies } from 'Api/Api';
import { useState, useEffect } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';

export const MoviesDetails = () => {
	const [film, setFilm] = useState(null);
	const { movieId } = useParams();
	const location = useLocation();

	// !Возврат на предедущую страницу
	const prevLink = location.state?.from ?? '/';

	useEffect(() => {
		getDetailsMovies(movieId).then(({ data }) => {
			console.log(data);
			setFilm(data);
		});
	}, [movieId]);
	return (
		<>
			{film && (
				<>
					<div>
						<Link to={prevLink}>go back</Link>
					</div>
					<div>
						<img
							src={`http://image.tmdb.org/t/p/w500${film.poster_path}`}
							alt={film.title}
						/>
						<div>
							<h2>
								{film.title} {film.release_date.slice(0, 4)}
							</h2>
							<p>{film.vote_average.toFixed(1)}</p>
							<h3>Overview</h3>
							<p>{film.overview}</p>
							<h4>Genres</h4>
							<ul>
								{film.genres.map(genre => (
									<li key={genre.name}>
										<p>{genre.name}</p>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div>
						<p>Additional information</p>
						<ul>
							<li>
								<Link to="cast" state={{ from: location }}>
									Cast
								</Link>
							</li>
							<li>
								<Link to="reviews" state={{ from: location }}>
									Reviews
								</Link>
							</li>
						</ul>
					</div>
					<Outlet />
				</>
			)}
		</>
	);
};
