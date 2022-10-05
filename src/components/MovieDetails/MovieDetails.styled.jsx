import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BoxLink = styled.div``;

export const MovieDetailsLink = styled(Link)`
	display: block;
	width: 70px;
	text-align: center;
	padding: 10px 20px;
	color: white;
	text-decoration: none;
	font-size: 16px;
	background-color: #18181b;
	border-radius: 25px;
	box-shadow: 0 4px 8px 0 #00ffff, 0 6px 20px 0 rgba(0, 0, 0, 0.19);

	&.active {
		border-bottom: solid 3px #00ffff;
		color: #099fff;
	}
	:hover:not(.active) {
		color: #099fff;
	}
`;
export const MovieDetailContainer = styled.div`
	display: flex;
	margin-top: 30px;
`;

export const MovieDetailImg = styled.img`
	margin-right: 30px;
	height: 450px;
`;

export const MovieDetailOverview = styled.p`
	color: #22c2c2;
`;

export const MovieDetailText = styled.h2`
	color: #22c2c2;
	font-size: 30px;
`;
export const MovieDetailSecondary = styled.h3`
	color: #22c2c2;
	font-size: 20px;
`;
export const MovieDetailThidly = styled.h4`
	color: #22c2c2;
	font-size: 20px;
`;
export const MovieDetailBox = styled.div`
	width: 750px;
	margin-right: auto;
	margin-left: auto;
`;
export const MovieDetailGenre = styled.ul`
	color: #22c2c2;
	display: flex;
`;
export const MovieDetailDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const MovieDetailUl = styled.ul`
	margin: 10px;
`;

export const MovieDetailP = styled.p`
	color: white;
	font-size: 25px;
	font-style: italic;
`;
