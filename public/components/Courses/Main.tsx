import { useRouter } from 'next/router'

import tiers from 'data/tiers.json'
import TierName, { TIER_NAMES } from 'models/TierName'
import FilterButton from './FilterButton'
import TierRow from './TierRow'

import styles from 'styles/components/Courses/Main.module.scss'

export type Filter = undefined | TierName

const CoursesMain = () => {
	const filter = useRouter().query.tier as Filter
	
	return (
		<main className={styles.root}>
			<div className={styles.filters}>
				<FilterButton value={undefined} filter={filter}>
					All
				</FilterButton>
				{TIER_NAMES.map(tier => (
					<FilterButton key={tier} value={tier} filter={filter}>
						{tiers[tier].title}
					</FilterButton>
				))}
			</div>
			<div className={styles.tiers}>
				{filter
					? <TierRow key={filter} tier={filter} />
					: TIER_NAMES.map(tier => <TierRow key={tier} tier={tier} />)
				}
			</div>
		</main>
	)
}

export default CoursesMain
