import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const cardHeight = 260;

const bannerHeight = '110px';

export const WorkFlex = styled(motion.div)<{ reverse: boolean, isExpanded: boolean }>`
	display: flex;
	flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
	margin-top: 30px;
	position: relative;

	@media (max-width: 1000px) {
		flex-direction: ${({ reverse }) => reverse ? 'column-reverse' : 'column'};

		${({ isExpanded }) => !isExpanded && css`
			height: 530px !important;
		`}
	}
`;

export const WorkNotice = styled(motion.p)`
	color: ${({ theme }) => theme.colors.primary[200]};
	font-size: 15px;
	margin-top: 15px;
	text-align: center;
`;

export const WorkCardContainer = styled(motion.div)<{ isOpen: boolean }>`
	background-color: ${({ theme }) => theme.colors.primary[800]};
	border-radius: 4px;
	box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.05);
	cursor: pointer;
	width: calc(50% - 5px);
	height: ${cardHeight}px;
	overflow: hidden;
	text-align: left;
	transition: background-color 0.25s;

	${({ isOpen }) => isOpen ? css`
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		z-index: 100 !important;
	` : css`
		:hover{
			& > :last-child > :last-child > :last-child > :last-child {
				color: white;
			}
		}
	`}

	:not(:last-child) {
		margin-right: 10px;
	}

	:hover {
		background-color: ${({ theme }) => theme.colors.primary[700]};
	}

	@media (max-width: 1000px) {
		width: 100%;
		margin-right: 0px;

		:not(:last-child) {
			margin-bottom: 10px;
		}
	}
`;

export const WorkBannerContainer = styled(motion.div)<{ color?: string, bgImg?: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: ${bannerHeight};

	${({ bgImg, color }) => bgImg ? css`
		background-image: ${`url(/img/${bgImg})`};
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	` : css`
		background-color: ${color};
	`}
`;

export const WorkCardBanner = styled(motion.img)`
	height: 80px;
	width: auto;
`;

export const WorkCardBody = styled.div`
	height: calc(100% - ${bannerHeight} - 30px);
	padding: 15px 10px;
	display: flex;

	@media (max-width: 930px) {
		flex-direction: column;
	}
`;

export const WorkCardDescription = styled(motion.p)<{ shorten: boolean }>`
	color: ${({ theme }) => theme.colors.primary[200]};
	margin: 5px 0px;

	${({ shorten }) => shorten && css`
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3; 
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	`}
`;

export const WorkCardReadMore = styled(motion.div)<{ isSelected: boolean }>`
	color: ${({ theme }) => theme.colors.primary[100]};
	font-size: 14px;
	font-weight: 700;
	margin-top: 10px;
	text-transform: uppercase;
	transition: color 0.25s;

	${({ isSelected }) => isSelected && css`
		position: absolute;
		bottom: 15px;
		left: 15px;
	`}
`;

export const WorkCardSidebar = styled(motion.div)`
	border-left: 1px solid ${({ theme }) => theme.colors.primary[400]};
	display: flex;
	flex-direction: column;
	height: 100%;
	margin-left: 15px;
	min-width: 300px;
	padding-left: 15px;

	@media (max-width: 930px) {
		border-left: none;
		border-top: 1px dashed ${({ theme }) => theme.colors.primary[400]};
		margin-left: 0px;
		padding-left: 0px;
		margin-top: 10px;
		padding-top: 10px;
	}
`;

export const WorkCardHint = styled.p`
	color: ${({ theme }) => theme.colors.primary[200]};
	margin-bottom: 10px;
	margin-top: auto;

	@media (max-width: 930px) {
		display: none;
	}
`;

export const TechTagsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 2.5px -2.5px;

	& > * {
		margin: 2.5px 2.5px;
	}
`;

export const WorkCardLinkButton = styled(motion.a)<{ color?: string }>`
	background-color: ${({ color, theme }) => color || theme.colors.primaryGreen};
	border-radius: 6px;
	display: flex;
	align-items: center;
	font-weight: 700;
	margin-top: 15px;
	text-transform: uppercase;
	padding: 15px 20px;
	width: fit-content;

	:hover {
		text-decoration: underline;
	}

	& > :first-child {
		margin-right: 5px;
	}
`;