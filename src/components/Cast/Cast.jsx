import { getCastMovies } from 'Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
				<ul>
					{cast &&
						cast.map(({ id, name, character, profile_path }) => (
							<li key={id}>
								<img
									src={`http://image.tmdb.org/t/p/w500${profile_path}`}
									alt={name}
								/>
								<p>{name}</p>
								<p>Character:{character}</p>
							</li>
						))}
				</ul>
			</div>
		</>
	);
};
