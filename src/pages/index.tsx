import { Hero } from '@components/Hero';
import { HomePageContainer, ProjectsGrid } from './_styles';
import { ProjectCard } from '@components/ProjectCard';
import { NavigationBar } from '@components/NavigationBar';
import { SectionLabel } from '@components/common';
import { Work } from '@components/Work';
import { getAnimationProps } from '@utils/motion';

export default function Home() {
	return (
		<>
			<NavigationBar/>
			<HomePageContainer>
				<Hero/>
				<Work/>
				<SectionLabel {...getAnimationProps(6)}>
					My Personal Projects
				</SectionLabel>
				<ProjectsGrid>
					<ProjectCard
						title={'Events API'}
						description={'An API that fetches historical events from Wikipedia.'}
						link={'https://github.com/HistoryLabs/events-api'}
						tags={['go', 'api']}
						index={0}
					/>
					<ProjectCard
						title={'Todo App'}
						description={'A dead simple task tracking app with some snazzy animations.'}
						link={'https://github.com/Angoooose/todo-app'}
						tags={['nextjs', 'tailwind', 'prisma', 'framer-motion']}
						index={1}
					/>
					<ProjectCard
						title={'EZ Poll'}
						description={'A polling web application built to be as simple and easy-to-use as possible.'}
						link={'https://github.com/Angoooose/ez-poll'}
						tags={['nextjs', 'tailwind', 'rabbitmq', 'socket.io']}
						index={2}
					/>
					<ProjectCard
						title={'Historian Bot'}
						description={'A Discord bot that displays historical events either on command or automatically.'}
						link={'https://github.com/HistoryLabs/historian-bot'}
						tags={['typescript', 'mongodb']}
						index={3}
					/>
					<ProjectCard
						title={'hermes'}
						description={'A truly temporary web-based messaging app. Accounts only last 48 hours.'}
						link={'https://github.com/Angoooose/hermes'}
						tags={['react', 'firebase']}
						index={5}
					/>
					<ProjectCard
						title={'Rolodex'}
						description={'A contact management web application. Inspired by the roldexes of old.'}
						link={'https://github.com/Angoooose/rolodex'}
						tags={['react', 'firebase', 'tailwind']}
						index={6}
					/>
				</ProjectsGrid>
			</HomePageContainer>
		</>
	)
}
