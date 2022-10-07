import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { NavList, NavItem, StyledNavLink } from '../Layout/Layout.styled.';
export const Layout = () => {
	return (
		<>
			<header>
				<nav>
					<NavList>
						<NavItem>
							<StyledNavLink end to="/">
								Home
							</StyledNavLink>
						</NavItem>
						<NavItem>
							<StyledNavLink to="/movies">Movies</StyledNavLink>
						</NavItem>
					</NavList>
				</nav>
			</header>
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</>
	);
};
