import { motion } from 'framer-motion';
import styled from 'styled-components';

export const FooterContainer = styled(motion.footer)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 50px;

	& > * {
		margin: 0px 25px;

		@media (max-width: 650px) {
			margin: 0px 10px;
		}
	}
`;

export const FooterTitle = styled.p`
	font-size: 25px;
	font-weight: 700;

	& > span {
		color: ${({ theme }) => theme.colors.primary[200]};
	}
`;

export const FooterLink = styled.a`
	color: ${({ theme }) => theme.colors.primary[200]};
	transition: color 0.25s;

	:hover {
		color: ${({ theme }) => theme.colors.primaryGreen};
	}

	@media (max-width: 525px) {
		display: none;
	}
`;