import { FC } from 'react';
import { HeroContainer, HeroDescription, HeroTitle, ProjectsLabel } from './styles';
import { ArrowLongDownIcon } from '@heroicons/react/24/solid'
import { MotionProps, motion } from 'framer-motion';

export const Hero: FC = () => {
	const animationProps: MotionProps = {
		initial: { y: 15, opacity: 0 },
		animate: { y: 0, opacity: 1}
	}
	
	return (
		<HeroContainer>
			<motion.h2 {...animationProps}>
				Hello There.
			</motion.h2>
			<HeroTitle transition={{ delay: 0.2 }} {...animationProps}>
				I make things for the web.
			</HeroTitle>
			<HeroDescription transition={{ delay: 0.3 }} {...animationProps}>
				{'I\'m a full-stack software engineer from the U.S. I take passion in building modern and intuitive frontends, and performant and scaleable backends.'}
			</HeroDescription>
			<ProjectsLabel transition={{ delay: 0.4 }} {...animationProps}>
				<ArrowLongDownIcon height={30}/>
				My Projects
			</ProjectsLabel>
		</HeroContainer>
	);
}