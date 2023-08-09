import { FC, ReactNode } from 'react';
import { SectionLabelContainer } from './styles';
import { ArrowLongDownIcon } from '@heroicons/react/24/solid';
import { MotionProps } from 'framer-motion';

interface SectionLabelProps extends MotionProps {
	children: ReactNode;
};

export const SectionLabel: FC<SectionLabelProps> = (props) => {
	return (
		<SectionLabelContainer {...props}>
			<ArrowLongDownIcon height={30}/>
			{props.children}
		</SectionLabelContainer>
	);
}