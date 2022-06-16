import React from 'react';
import styled from 'styled-components';

interface Props {}

const Navigation = (): JSX.Element => {
	return (
		<NavFrame>
			<LogoFrame></LogoFrame>
			<MenuFrame>
				<MenuList>
					<Title>처음 시작하기</Title>
				</MenuList>
				<MenuList>
					<Title>우리회사 관리</Title>
				</MenuList>
			</MenuFrame>
			<ProfileFrame>
				<ImageFrame></ImageFrame>
			</ProfileFrame>
		</NavFrame>
	);
};

export default Navigation;

const NavFrame = styled.div``;
const LogoFrame = styled.div``;
const MenuFrame = styled.div``;
const MenuList = styled.div``;
const Title = styled.div``;
const ProfileFrame = styled.div``;
const ImageFrame = styled.div``;
