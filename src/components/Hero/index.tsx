import { FC } from 'react';
import { HeroContainer, HeroDescription, HeroTitle } from './styles';
import { motion } from 'framer-motion';
import { getAnimationProps } from '@utils/motion';

export const Hero: FC = () => {
	return (
		<HeroContainer>
			<motion.h2 {...getAnimationProps()}>
				Hello There.
			</motion.h2>
			<HeroTitle {...getAnimationProps(1)}>
				I make things for the web.
			</HeroTitle>
			<HeroDescription transition={{ delay: 0.3 }} {...getAnimationProps(2)}>
				{'I\'m a full-stack software engineer from the U.S. I take passion in building modern and intuitive frontends, and performant and scaleable backends.'}
			</HeroDescription>
		</HeroContainer>
	);
}