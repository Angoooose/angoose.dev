import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	html, body, body > div {
		background-color: ${({ theme }) => theme.colors.primary[900]};
		color: white;
		height: 100%;
	}
	
	a {
		color: white;
		text-decoration: none;
	}
`;