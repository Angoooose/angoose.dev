import { FC } from 'react';
import { ProjectCardContainer, ProjectDescription, ProjectLink, ProjectTag, ProjectTagsContainer, ProjectTitle } from './styles';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

interface ProjectCardProps {
	title: string;
	description: string;
	link: string;
	tags: string[];
}

export const ProjectCard: FC<ProjectCardProps> = ({ title, description, link, tags }) => {
	return (
		<ProjectCardContainer href={link} target={'_blank'} rel={'noreferer'}>
			<ProjectTitle>
				{title}
			</ProjectTitle>
			<ProjectDescription>
				{description}
			</ProjectDescription>
			<ProjectTagsContainer>
				{tags.map((tag) => (
					<ProjectTag>
						{tag}
					</ProjectTag>
				))}
			</ProjectTagsContainer>
			<ProjectLink>
				<ArrowUpRightIcon height={15}/>
				Open in GitHub
			</ProjectLink>
		</ProjectCardContainer>
	);
}