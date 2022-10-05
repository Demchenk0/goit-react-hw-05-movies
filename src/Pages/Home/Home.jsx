import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'Api/Api';
import { Link, useLocation } from 'react-router-dom';
export const Home = () => {
	const [films, setFilms] = useState(null);
	const location = useLocation();
	useEffect(() => {
		getTrendingMovies().then(({ data }) => {
			setFilms(data.results);
			console.log(data.results);
		});
	}, []);

	return (
		<div>
			<h1>Trending Today</h1>
			<ul>
				{films &&
					films.map(({ id, poster_path, title }) => {
						return (
							<Link to={`movies/${id}`} state={{ from: location }}>
								<li key={poster_path}>
									<img
										src={`http://image.tmdb.org/t/p/w500${poster_path}`}
										alt={title}
									/>
									<p>{title}</p>
								</li>
							</Link>
						);
					})}
			</ul>
		</div>
	);
};
