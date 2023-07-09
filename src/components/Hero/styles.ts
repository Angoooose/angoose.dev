import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeroContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 980px) {
		align-items: center;
		text-align: center;
	}
`;

export const HeroTitle = styled(motion.h1)`
	color: ${({ theme }) => theme.colors.primaryGreen};
`;

export const HeroDescription = styled(motion.p)`
	color: ${({ theme }) => theme.colors.primary[200]};
	font-size: 20px;
	line-height: 25px;
	margin-top: 5px;
	max-width: 700px;
`;

export const ProjectsLabel = styled(motion.label)`
	color: ${({ theme }) => theme.colors.primary[200]};
	display: flex;
	align-items: center;
	font-size: 18px;
	margin-top: 30px;

	& > :first-child {
		margin-right: 10px;
	}
`;