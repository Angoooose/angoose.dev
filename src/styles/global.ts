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

		@media (max-width: 1640px) {
			padding: 0px 150px;
		}

		@media (max-width: 1430px) {
			padding: 0px 100px;
		}

		@media (max-width: 1320px) {
			padding: 0px 50px;
		}

		@media (max-width: 900px) {
			padding: 0px 25px;
		}

		@media (max-width: 570px) {
			padding: 0px 10px;
		}
	}
	
	a {
		color: white;
		text-decoration: none;
	}
`;