import { FC } from 'react';
import { ProjectCardContainer, ProjectDescription, ProjectLink, ProjectTag, ProjectTagsContainer } from './styles';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

interface ProjectCardProps {
	title: string;
	description: string;
	link: string;
	tags: string[];
	index: number;
}

export const ProjectCard: FC<ProjectCardProps> = ({ title, description, link, tags, index }) => {
	return (
		<ProjectCardContainer
			href={link}
			target={'_blank'}
			rel={'noreferer'}
			initial={{ y: 50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 0.6 + (index * 0.1) }}
		>
			<div>
				<h4>
					{title}
				</h4>
				<ProjectDescription>
					{description}
				</ProjectDescription>
				<ProjectTagsContainer>
					{tags.map((tag, i) => (
						<ProjectTag key={i}>
							{tag}
						</ProjectTag>
					))}
				</ProjectTagsContainer>
			</div>
			<ProjectLink>
				<ArrowUpRightIcon height={15}/>
				Open in GitHub
			</ProjectLink>
		</ProjectCardContainer>
	);
}