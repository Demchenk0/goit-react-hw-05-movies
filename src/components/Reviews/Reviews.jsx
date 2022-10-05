import { getReviewsMovies } from 'Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
	const [reviews, setReviews] = useState(null);
	const { movieId } = useParams();

	useEffect(() => {
		getReviewsMovies(movieId).then(({ data }) => {
			console.log(data);
			setReviews(data.results);
		});
	}, [movieId]);
	return (
		<>
			<div>
				<ul>
					{reviews?.length ? (
						reviews.map(({ id, author, content }) => (
							<li key={id}>
								<h2>Author:{author}</h2>
								<p>{content}</p>
							</li>
						))
					) : (
						<p>Будь первым</p>
					)}
				</ul>
			</div>
		</>
	);
};
