import { Hero } from '@components/Hero';
import { HomePageContainer, ProjectsGrid } from './_styles';
import { ProjectCard } from '@components/ProjectCard';
import { NavigationBar } from '@components/NavigationBar';

export default function Home() {
	return (
		<>
			<NavigationBar/>
			<HomePageContainer>
				<Hero/>
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
				</ProjectsGrid>
			</HomePageContainer>
		</>
	)
}
