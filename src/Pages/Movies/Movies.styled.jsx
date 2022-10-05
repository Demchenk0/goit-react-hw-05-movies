import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const MoviesList = styled.ul`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 30px;
`;

export const MoviesLink = styled(Link)`
	color: white;
	text-decoration: none;
	&.active {
		border-bottom: solid 3px #00ffff;
		color: #099fff;
	}
	:hover:not(.active) {
		color: #099fff;
	}
`;
export const MoviesImg = styled.img`
	display: block;
	width: 250px;
	height: 400px;
`;

export const MoviesForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
`;
export const MoviesInput = styled.input`
	width: 300px;
	padding: 12px 20px;
	box-sizing: border-box;
	border-radius: 25px;
	background-color: #1c2a44;
	color: white;
	background: transparent;
	box-shadow: 0 4px 8px 0 #00ffff, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	outline: none;
	font-size: 15px;
`;

export const MoviesButton = styled.button`
	display: flex;
	width: 70px;
	justify-content: center;
	text-align: center;
	padding: 5px 20px;
	color: white;
	-webkit-text-decoration: none;
	text-decoration: none;
	font-size: 16px;
	background-color: #18181b;
	border-radius: 25px;
	/* box-shadow: 0 4px 8px 0 #00ffff, 0 6px 20px 0 rgb(0 0 0 / 19%); */
	margin-left: 10px; ;
`;
