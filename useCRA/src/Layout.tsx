import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

interface Props {}

const Layout = () => {
	return (
		<LayoutFrame>
			<Navigation />
			<BodyFrame>
				<Outlet />
			</BodyFrame>
		</LayoutFrame>
	);
};

export default Layout;

const LayoutFrame = styled.div`
	background-color: yellow;
`;

const Navigation = styled.div``;
const BodyFrame = styled.div``;
