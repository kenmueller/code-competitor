import { useState } from 'react'

import tiers from 'data/tiers.json'
import TierName, { TIER_NAMES } from 'models/TierName'
import FilterButton from './FilterButton'
import TierRow from './TierRow'

import styles from 'styles/components/Courses/Main.module.scss'

export type Filter = null | TierName

const CoursesMain = () => {
	const [filter, setFilter] = useState<Filter>(null)
	
	return (
		<main className={styles.root}>
			<div className={styles.filters}>
				<FilterButton value={null} filter={filter} setFilter={setFilter}>
					All
				</FilterButton>
				{TIER_NAMES.map(tier => (
					<FilterButton key={tier} value={tier} filter={filter} setFilter={setFilter}>
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
