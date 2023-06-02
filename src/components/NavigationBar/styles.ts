import styled from 'styled-components';

export const NavigationBarContainer = styled.div`
	padding: 25px 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const NavigationTitle = styled.a`
	font-size: 25px;
	font-weight: 700;

	& > span {
		color: ${({ theme }) => theme.colors.primary[200]};
	}
`;

export const NavigationLinksContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const NavigationLink = styled.a`
	display: flex;
	align-items: center;
	justify-self: flex-end;
	transition: opacity 0.25s;

	& > :first-child {
		margin-right: 7.5px;
	}
	
	:not(:last-child) {
		margin-right: 20px;
	}

	:hover {
		opacity: 0.75;
	}
`;

NavigationLink.defaultProps = {
	target: '_blank',
	rel: 'noreferer',
}