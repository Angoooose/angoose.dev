import { FC } from 'react';
import { NavigationBarContainer, NavigationCopiedMessage, NavigationLink, NavigationLinksContainer, NavigationTitle } from './styles';
import Image from 'next/image';
import { CheckCircleIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import { useEphemeral } from '../../hooks/useEphemeral';
import { AnimatePresence } from 'framer-motion';

export const NavigationBar: FC = () => {
	const [isCopied, setIsCopied] = useEphemeral(1000, false);

	const handleCopy = () => {
		window.navigator.clipboard.writeText('Angoose#3794');
		setIsCopied(true);
	}

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
				<NavigationLink onClick={handleCopy}>
					<Image
						src={'/img/discord.svg'}
						height={30}
						width={30}
						alt={'Discord'}
					/>
					Angoose#3794
					<AnimatePresence>
						{isCopied && (
							<NavigationCopiedMessage
								transition={{ type: 'tween' }}
								initial={{ y: -25, scale: 0.5 }}
								animate={{ y: 0, scale: 1 }}
								exit={{ y: -25, scale: 0.5 }}
							>
								<CheckCircleIcon height={15}/>
								Copied Handle
							</NavigationCopiedMessage>
						)}
					</AnimatePresence>
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