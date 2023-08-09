import { MotionProps } from 'framer-motion';

export const getAnimationProps = (index?: number): MotionProps => {
	const props: MotionProps = {
		initial: { y: 15, opacity: 0 },
		animate: { y: 0, opacity: 1},
	};

	if (index) props.transition = { delay: index * 0.1 };

	return props;
}