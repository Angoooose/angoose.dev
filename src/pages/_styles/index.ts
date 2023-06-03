import styled from 'styled-components';

export const HomePageContainer = styled.div`
	padding: 50px 0px;
`;

export const ProjectsGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 10px;
	margin-top: 30px;

	@media (max-width: 1230px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 820px) {
		grid-template-columns: 1fr;
	}
`;