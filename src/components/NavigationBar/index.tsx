import { FC } from 'react';
import { NavigationBarContainer, NavigationLink, NavigationLinksContainer, NavigationTitle } from './styles';
import Image from 'next/image';
import { EnvelopeIcon } from '@heroicons/react/20/solid';

export const NavigationBar: FC = () => {
	return (
		<NavigationBarContainer>
			<NavigationTitle href={'https://github.com/Angoooose/'} target={'_blank'} rel={'noreferer'}>
				<span>{'<'}</span>
				Angoose
				<span>{'/>'}</span>
			</NavigationTitle>
			<NavigationLinksContainer>
				<NavigationLink href={'https://github.com/Angoooose/'}>
					<Image
						src={'/img/github.svg'}
						height={30}
						width={30}
						alt={'GitHub'}
					/>
					Angoooose
				</NavigationLink>
				<NavigationLink href={'https://twitter.com/realangoose'}>
					<Image
						src={'/img/twitter.svg'}
						height={30}
						width={30}
						alt={'Twitter'}
					/>
					@RealAngoose
				</NavigationLink>
				<NavigationLink href={'mailto:contact@angoose.dev'}>
					<EnvelopeIcon height={30}/>
					contact@angoose.dev
				</NavigationLink>
				<NavigationLink href={'https://www.linkedin.com/in/angus-d-2230a3244/'}>
					<Image
						src={'/img/linkedin.svg'}
						height={30}
						width={30}
						alt={'LinkedIn'}
					/>
					Angus Durfee
				</NavigationLink>
			</NavigationLinksContainer>
		</NavigationBarContainer>
	);
}