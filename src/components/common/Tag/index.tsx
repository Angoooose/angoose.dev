import styled from 'styled-components';

export const Tag = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.primaryGreen};
	border-radius: 20px;
	color: ${({ theme }) => theme.colors.primaryGreen};
	font-size: 14px;
	padding: 2.5px 10px;
	width: fit-content;
`;