import styled from 'styled-components';

export const ProjectCardContainer = styled.a`
	background-color: ${({ theme }) => theme.colors.primary[800]};
	border-radius: 4px;
	box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.05);
	padding: 15px;

	:hover {
		& > :last-child {
			color: ${({ theme }) => theme.colors.primary[100]};
		}
	}
`;

export const ProjectTitle = styled.div`
	font-size: 16px;
	font-weight: 700;
`;

export const ProjectDescription = styled.div`
	color: ${({ theme }) => theme.colors.primary[200]};
	margin-top: 2.5px;
`;

export const ProjectTagsContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;
`;

export const ProjectTag = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.primaryGreen};
	border-radius: 20px;
	color: ${({ theme }) => theme.colors.primaryGreen};
	font-size: 14px;
	padding: 2.5px 10px;

	:not(:first-child) {
		margin-left: 5px;
	}
`;

export const ProjectLink = styled.div`
	color: ${({ theme }) => theme.colors.primary[200]};
	display: flex;
	align-items: center;
	margin-top: 10px;
	transition: color 0.25s;

	& > :first-child {
		margin-right: 5px;
	}
`;