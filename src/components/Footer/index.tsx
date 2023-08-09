import { FC } from 'react';
import { FooterContainer, FooterLink, FooterTitle } from './styles';
import { getAnimationProps } from '@utils/motion';

export const Footer: FC = () => {
	return (
		<FooterContainer {...getAnimationProps(14)}>
			<FooterLink href={'https://github.com/Angoooose/'}>
				GitHub
			</FooterLink>
			<FooterLink href={'https://www.linkedin.com/in/angus-d-2230a3244/'}>
				LinkedIn
			</FooterLink>
			<FooterTitle>
				<span>{'<'}</span>
				Angoose
				<span>{'/>'}</span>
			</FooterTitle>
			<FooterLink href={'https://twitter.com/realangoose'}>
				Twitter
			</FooterLink>
			<FooterLink href={'mailto:contact@angoose.dev'}>
				Contact
			</FooterLink>
		</FooterContainer>
	);
}