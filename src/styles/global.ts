import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	html, body, body > div {
		background-color: ${({ theme }) => theme.colors.primary[900]};
		color: white;
		height: 100%;
		margin: 0px;
	}

	h1, h2, h3, h4, p {
		margin: 0px;
	}

	h1 {
		font-size: 40px;
	}

	h2 {
		font-size: 30px;
	}

	h3 {
		font-size: 26px;
	}

	h4 {
		font-size: 18px;
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

	::-webkit-scrollbar {
		background-color: #fff;
		width: 14px;
	}

	::-webkit-scrollbar-track {
		background-color: ${({ theme }) => theme.colors.primary[900]};
	}

	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.primary[400]};
		border-radius: 16px;
		border: 4px solid ${({ theme }) => theme.colors.primary[900]};
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: ${({ theme }) => theme.colors.primary[200]};
	}

	::-webkit-scrollbar-button {
		display: none;
	}
`;