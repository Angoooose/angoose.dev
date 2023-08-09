import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SectionLabelContainer = styled(motion.label)`
	color: ${({ theme }) => theme.colors.primary[200]};
	display: flex;
	align-items: center;
	font-size: 18px;
	margin-top: 30px;

	& > :first-child {
		margin-right: 10px;
	}

	@media (max-width: 980px) {
		justify-content: center;
	}
`;