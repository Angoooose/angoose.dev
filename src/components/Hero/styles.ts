import styled from 'styled-components';

export const HeroContainer = styled.div`

`;

export const HeroGreeting = styled.div`
	font-size: 30px;
	font-weight: 700;
`;

export const HeroTitle = styled.div`
	color: ${({ theme }) => theme.colors.primaryGreen};
	font-size: 40px;
	font-weight: 700;
`;

export const HeroDescription = styled.div`
	color: ${({ theme }) => theme.colors.primary[200]};
	font-size: 20px;
	line-height: 25px;
	margin-top: 5px;
	max-width: 700px;
`;

export const ProjectsButton = styled.a`
	color: ${({ theme }) => theme.colors.primary[200]};
	display: flex;
	align-items: center;
	font-size: 18px;
	margin-top: 30px;

	& > :first-child {
		margin-right: 10px;
	}
`;