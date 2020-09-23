import Competition from './Competition'

import styles from 'styles/components/Competitions/Main.module.scss'

const CompetitionsMain = () => (
	<main className={styles.root}>
		<Competition
			title="USACO"
			description="This is the most prestigious high school coding competition in the United States. Competitors compete in C/C++, Java, or Python within 4 levels: bronze, silver, gold, and platinum. Competition dates are:"
			labels={['Competition', 'Date']}
			rows={[
				['First contest', 'December 13-16, 2020', '#'],
				['Second contest', 'January 17-20, 2021', '#'],
				['Third contest', 'February 21-24, 2021', '#'],
				['US Open', 'March 27-30, 2021', '#'],
				['Training camp', 'May 23-30, 2021', '#']
			]}
		/>
		<Competition
			title="IOI"
			description="The International Olympiad of Informatics is the most prestigious high school coding competition in the World! Competitors compete in either C++ or Java. Competition dates and locations are:"
			labels={['Location', 'Date']}
			rows={[
				['Online', 'September 13-19, 2020', '#'],
				['Singapore', 'June 20-27, 2021', '#'],
				['Indonesia', '2022', '#'],
				['Hungary', '2023', '#'],
				['Egypt', '2024', '#']
			]}
		/>
	</main>
)

export default CompetitionsMain
