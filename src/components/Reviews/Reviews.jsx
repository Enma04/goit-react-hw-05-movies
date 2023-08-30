import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from 'resources/moviesData';
import css from './Review.module.css';

export const Reviews = () => {
	const { id } = useParams();
	const [review, setReview] = useState([]);

	useEffect(() => {
		async function newReview() {
			const data = await getMovie(id, '/reviews');
			setReview(data.results);
		}
		newReview();
	}, [id]);

	return(
		<>
			{
				review.length ?
				<ul className={css.box}>
					{
						review.map(rev => (
							<li key={rev.id} className={css.review}>
								<span className={css.name}> {rev.author} </span>
								{
									rev.author_details.rating &&
									<span className={css.rating}> Rating: {rev.author_details.rating} </span>
								}
								<span className={css.coment}> {rev.content} </span>
							</li>
						))
					}
				</ul> :
				<h3 className='titlesH3'>It hasn't reviews</h3>
			}
		</>
	);
}