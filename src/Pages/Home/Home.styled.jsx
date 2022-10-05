import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const HomeContainer = styled.div`
	display: contents;
	text-align: center;
	align-items: center;
`;

export const HomeText = styled.h1`
	color: #fdfdfd;
	text-shadow: 4px 4px 4px #c7c7c7;
`;
export const HomeList = styled.ul`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 30px;
`;

export const StyledHomeLink = styled(Link)`
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
export const HomeImg = styled.img`
	display: block;
	width: 250px;
	height: 400px;
`;
