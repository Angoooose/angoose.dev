import { FC } from 'react';
import { HeroContainer, HeroDescription, HeroGreeting, HeroTitle, ProjectsButton } from './styles';
import { ArrowLongDownIcon } from '@heroicons/react/24/solid'

export const Hero: FC = () => {
	return (
		<HeroContainer>
			<HeroGreeting>
				Hello There.
			</HeroGreeting>
			<HeroTitle>
				I make things for the web.
			</HeroTitle>
			<HeroDescription>
				I'm a full-stack software engineer from the U.S. I take passion in building modern and inuitive frontends, and performent and stateless backends.
			</HeroDescription>
			<ProjectsButton>
				<ArrowLongDownIcon height={30}/>
				View Projects
			</ProjectsButton>
		</HeroContainer>
	);
}