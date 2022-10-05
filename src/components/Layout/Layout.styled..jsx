import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
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

export const NavList = styled.ul`
	margin: 20px;
	width: auto;
	display: flex;
	flex-direction: row;
	padding: 25px 0;
	border-radius: 25px;
	border: 0.1px solid #099fff;
	background-color: #18181b;
	box-shadow: 0 4px 8px 0 #00ffff, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const NavItem = styled.li`
	margin: auto;
	color: white;
	font-size: 20px;
	cursor: pointer;
	&:after {
		display: block;
	}
	&:hover:after {
		transform: scaleX(1);
	}
`;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
