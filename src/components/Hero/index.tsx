import { FC } from 'react';
import { HeroContainer, HeroDescription, HeroGreeting, HeroTitle, ProjectsButton } from './styles';
import { ArrowLongDownIcon } from '@heroicons/react/24/solid'
import { MotionProps } from 'framer-motion';

export const Hero: FC = () => {
	const animationProps: MotionProps = {
		initial: { y: 15, opacity: 0 },
		animate: { y: 0, opacity: 1}
	}
	
	return (
		<HeroContainer>
			<HeroGreeting {...animationProps}>
				Hello There.
			</HeroGreeting>
			<HeroTitle transition={{ delay: 0.2 }} {...animationProps}>
				I make things for the web.
			</HeroTitle>
			<HeroDescription transition={{ delay: 0.3 }} {...animationProps}>
				{'I\'m a full-stack software engineer from the U.S. I take passion in building modern and intuitive frontends, and performant and scaleable backends.'}
			</HeroDescription>
			<ProjectsButton transition={{ delay: 0.4 }} {...animationProps}>
				<ArrowLongDownIcon height={30}/>
				My Projects
			</ProjectsButton>
		</HeroContainer>
	);
}