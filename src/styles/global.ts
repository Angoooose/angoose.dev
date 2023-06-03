import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	html, body, body > div {
		background-color: ${({ theme }) => theme.colors.primary[900]};
		color: white;
		height: 100%;
		margin: 0px;
	}

	body {
		padding: 0px 250px;
	}
	
	a {
		color: white;
		text-decoration: none;
	}
`;