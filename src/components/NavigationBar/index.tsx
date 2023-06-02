import { FC } from 'react';
import { NavigationBarContainer, NavigationLink, NavigationLinksContainer, NavigationTitle } from './styles';
import Image from 'next/image';
import { EnvelopeIcon } from '@heroicons/react/24/solid';

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
				<NavigationLink>
					<Image
						src={'/img/discord.svg'}
						height={30}
						width={30}
						alt={'Discord'}
					/>
					Angoose#3794
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
			</NavigationLinksContainer>
		</NavigationBarContainer>
	);
}