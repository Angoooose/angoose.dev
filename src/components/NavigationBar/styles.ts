import styled from 'styled-components';

export const NavigationBarContainer = styled.div`
	padding: 25px 0px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 980px) {
		flex-direction: column;

		& > :last-child {
			margin-top: 30px;
		}
	}
`;

export const NavigationTitle = styled.a`
	font-size: 25px;
	font-weight: 700;

	& > span {
		color: ${({ theme }) => theme.colors.primary[200]};
	}

	@media (max-width: 980px) {
		font-size: 30px;
	}
`;

export const NavigationLinksContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: -20px;
`;

export const NavigationLink = styled.a`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	justify-self: flex-end;
	margin-top: 20px;
	position: relative;
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