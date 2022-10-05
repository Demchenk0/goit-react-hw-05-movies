import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'Api/Api';
import { useLocation } from 'react-router-dom';
import {
	HomeContainer,
	HomeText,
	HomeList,
	StyledHomeLink,
	HomeImg,
} from './Home.styled';

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
		<HomeContainer>
			<HomeText>Trending Today</HomeText>
			<HomeList>
				{films &&
					films.map(({ id, poster_path, title }) => {
						return (
							<StyledHomeLink
								key={poster_path}
								to={`movies/${id}`}
								state={{ from: location }}
							>
								<li>
									<HomeImg
										src={`http://image.tmdb.org/t/p/w500${poster_path}`}
										alt={title}
									/>
									<p>{title}</p>
								</li>
							</StyledHomeLink>
						);
					})}
			</HomeList>
		</HomeContainer>
	);
};
