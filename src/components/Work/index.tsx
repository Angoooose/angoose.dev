import { Dispatch, FC, MouseEvent, useState } from 'react';
import { WorkCardSidebar, TechTagsContainer, WorkBannerContainer, WorkCardBanner, WorkCardBody, WorkCardContainer, WorkCardDescription, WorkCardReadMore, WorkCardLinkButton, WorkNotice, WorkCardHint, cardHeight, WorkFlex } from './styles';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { SectionLabel, Tag } from '@components/common';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { useDimensions, useEphemeral } from '@hooks';
import { getAnimationProps } from '@utils/motion';

export const Work: FC = () => {
	const [selectedCard, setSelectedCard] = useState<number>();
	const { width } = useDimensions();

	return (
		<>
			<SectionLabel {...getAnimationProps(3)}>
				My Professional Work
			</SectionLabel>
			<motion.div {...getAnimationProps(4)}>
				<WorkFlex animate={{ height: selectedCard === undefined ? `${cardHeight}px` : (width < 600 ? '660px' : `${cardHeight * 2}px`) }} reverse={selectedCard !== undefined && selectedCard === 1} isExpanded={selectedCard !== undefined}>
					<LayoutGroup>
						<WorkCard
							id={1}
							selectedCard={selectedCard}
							setSelectedCard={setSelectedCard}
							banner={{ img: 'rivals.png', color: '#9146FF' }}
							title={'Twitch Rivals Leaderboard'}
							description={"One of my proudest achievements is the development of the Twitch Rivals Rust III leaderboard. Taking complete ownership, I single-handedly designed the entire UI while adhering to Twitch's design guidelines. Leveraging web sockets, the website provided near-instant updates to player statistics, efficiently handling thousands of concurrent socket connections during the event. Given the high traffic volume, I collaborated closely with our devops team to optimize data egress and ensure seamless performance."}
							tech={['NextJS', 'React', 'Socket.IO', 'Framer Motion', 'Styled Components']}
							link={'https://rustoria.co/twitch'}
						/>
						<WorkCard
							id={2}
							selectedCard={selectedCard}
							setSelectedCard={setSelectedCard}
							banner={{ img: 'rustoria.png', bgImg: 'rustoria-bg.jpg' }}
							title={'Support Website'}
							description={"One notable project I undertook was the development of a comprehensive support ticket website for Rustoria. This involved building both the frontend and backend entirely from scratch, with all the UIs designed by me. Notably, I consistently incorporated responsive design principles while crafting these UIs, gaining substantial proficiency in creating mobile UIs. The majority of the application serves our support staff, and I have collaborated closely with them to gather valuable feedback and bug reports, resulting in continuous enhancements to the application throughout its lifecycle. The application seamlessly processes thousands of tickets per week."}
							tech={['NextJS', 'React', 'Express.js', 'PostgreSQL', 'Prisma', 'Socket.IO', 'Redis', 'Framer Motion', 'Styled Components', 'Docker', 'CI/CD']}
						/>
					</LayoutGroup>
				</WorkFlex>
			</motion.div>
			<WorkNotice {...getAnimationProps(5)}>
				Please email me at <Email/> for more work examples.
			</WorkNotice>
		</>
	);
}

interface WorkCardProps {
	id: number;
	selectedCard: number | undefined;
	setSelectedCard: Dispatch<number | undefined>;
	banner: { img: string, bgImg?: string, color?: string };
	title: string;
	description: string;
	tech: string[];
	link?: string;
}

const WorkCard: FC<WorkCardProps> = ({ id, selectedCard, setSelectedCard, banner, title, description, tech, link }) => {
	const [isExiting, setIsExiting] = useEphemeral(500, false);
	
	const isSelected = selectedCard === id;

	const handleClick = (e: MouseEvent<HTMLDivElement>) => {
		if (selectedCard === id && !(e.target instanceof HTMLAnchorElement)) {
			setIsExiting(true);
			setSelectedCard(undefined);
		} else {
			setSelectedCard(id);
		}
	}

	return (
		<AnimatePresence>
			<WorkCardContainer
				onClick={(e) => handleClick(e)}
				isOpen={isSelected}
				initial={{ y: 25, opacity: 0 }}
				animate={{ y: 0, opacity: selectedCard === undefined || isSelected ? 1 : 0 }}
				style={{ zIndex: isExiting ? 100 : 0 }}
				layout
			>
				<WorkBannerContainer color={banner.color} bgImg={banner.bgImg} layout>
					<WorkCardBanner src={`/img/${banner.img}`} layout/> 
				</WorkBannerContainer>
				<WorkCardBody>
					<div>
						<motion.h3 layout={'position'}>
							{title}
						</motion.h3>
						<WorkCardDescription layout={'position'} shorten={!isSelected}>
							{description}
						</WorkCardDescription>
						{(isSelected && link !== undefined) && (
							<WorkCardLinkButton
								color={banner.color}
								href={link}
								target={'_blank'}
								rel={'noreferer'}
								initial={{ y: 15, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.2 }}
							>
								<ArrowTopRightOnSquareIcon width={20}/>
								Open Leaderboard
							</WorkCardLinkButton>
						)}
						<WorkCardReadMore isSelected={isSelected} layout={'position'}>
							Read {isSelected ? 'Less' : 'More'}
						</WorkCardReadMore>
					</div>
					{isSelected && (
						<WorkCardSidebar initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
							<h4>Tech Stack</h4>
							<TechTagsContainer>
								{tech.map((tech, i) => (
									<Tag key={i}>
										{tech}
									</Tag>
								))}
							</TechTagsContainer>
							<WorkCardHint>
								For more info on this project, please email me at <Email/>.
							</WorkCardHint>
						</WorkCardSidebar>
					)}
				</WorkCardBody>
			</WorkCardContainer>
		</AnimatePresence>
	);
}

const Email: FC = () => <a href={'mailto:contact@angoose.dev'}>contact@angoose.dev</a>;