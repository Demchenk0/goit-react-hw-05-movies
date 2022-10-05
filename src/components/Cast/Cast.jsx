import { getCastMovies } from 'Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastImg, CastText, CastItem } from './Cast.styled';

export const Cast = () => {
	const [cast, setCast] = useState(null);
	const { movieId } = useParams();

	useEffect(() => {
		getCastMovies(movieId).then(({ data }) => {
			console.log(data);
			setCast(data.cast.slice(0, 5));
		});
	}, [movieId]);
	return (
		<>
			<div>
				<CastList>
					{cast &&
						cast.map(({ id, name, character, profile_path }) => (
							<CastItem key={id}>
								<CastImg
									src={`http://image.tmdb.org/t/p/w500${profile_path}`}
									alt={name}
								/>
								<CastText>{name}</CastText>
								<CastText>Character:{character}</CastText>
							</CastItem>
						))}
				</CastList>
			</div>
		</>
	);
};
