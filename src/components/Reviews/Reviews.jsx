import { getReviewsMovies } from 'Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewLink, ReviewText } from './Reviews.styled';

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
				<ReviewLink>
					{reviews?.length ? (
						reviews.map(({ id, author, content }) => (
							<li key={id}>
								<h2>Author: {author}</h2>
								<ReviewText>{content}</ReviewText>
							</li>
						))
					) : (
						<p>Sorry, there's not a single review.</p>
					)}
				</ReviewLink>
			</div>
		</>
	);
};
