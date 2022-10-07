import { Suspense } from 'react';

import { getDetailsMovies } from 'Api/Api';
import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import {
	MovieDetailsLink,
	MovieDetailContainer,
	MovieDetailImg,
	MovieDetailOverview,
	MovieDetailText,
	MovieDetailSecondary,
	MovieDetailThidly,
	MovieDetailBox,
	MovieDetailGenre,
	MovieDetailDiv,
	MovieDetailUl,
	MovieDetailP,
} from './MovieDetails.styled';
export const MoviesDetails = () => {
	const [film, setFilm] = useState(null);
	const { movieId } = useParams();
	const location = useLocation();
	// const goBack = location.state?.from ?? '/movies';
	// !Возврат на предедущую страницу
	const prevLink = location.state?.from ?? '/movies';

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
					<MovieDetailBox>
						<div>
							<MovieDetailsLink to={prevLink}>go back</MovieDetailsLink>
						</div>
						<MovieDetailContainer>
							<MovieDetailImg
								src={`http://image.tmdb.org/t/p/w500${film.poster_path}`}
								alt={film.title}
							/>
							<div>
								<MovieDetailText>
									{film.title} {film.release_date.slice(0, 4)}
								</MovieDetailText>
								<MovieDetailOverview>
									{film.vote_average.toFixed(1)}
								</MovieDetailOverview>
								<MovieDetailSecondary>Overview</MovieDetailSecondary>
								<MovieDetailOverview>{film.overview}</MovieDetailOverview>
								<MovieDetailThidly>Genres</MovieDetailThidly>
								<MovieDetailGenre>
									{film.genres.map(genre => (
										<li key={genre.name}>
											<p>{genre.name}</p>
										</li>
									))}
								</MovieDetailGenre>
							</div>
						</MovieDetailContainer>
						<MovieDetailDiv>
							<MovieDetailP>Additional information</MovieDetailP>
							<ul>
								<MovieDetailUl>
									<MovieDetailsLink
										to="cast"
										state={{ from: location.state?.from }}
									>
										Cast
									</MovieDetailsLink>
								</MovieDetailUl>
								<MovieDetailUl>
									<MovieDetailsLink
										to="reviews"
										state={{ from: location.state?.from }}
									>
										Reviews
									</MovieDetailsLink>
								</MovieDetailUl>
							</ul>
						</MovieDetailDiv>

						<Suspense fallback={<div>Loading...</div>}>
							<Outlet />
						</Suspense>
					</MovieDetailBox>
				</>
			)}
		</>
	);
};
