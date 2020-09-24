import { useRouter } from 'next/router'

import Tier from 'models/Tier'
import TierName, { TIER_NAMES } from 'models/TierName'
import FilterButton from './FilterButton'
import TierRow from './TierRow'

import styles from 'styles/components/Courses/Main.module.scss'

export interface CoursesMainProps {
	tiers: Tier[]
}

export type Filter = undefined | TierName

const CoursesMain = ({ tiers }: CoursesMainProps) => {
	const filter = useRouter().query.tier as Filter
	
	return (
		<main className={styles.root}>
			<div className={styles.filters}>
				<FilterButton value={undefined} filter={filter} />
				{TIER_NAMES.map(tier => (
					<FilterButton key={tier} value={tier} filter={filter} />
				))}
			</div>
			<div className={styles.tiers}>
				{tiers.map(tier =>
					<TierRow key={tier.title} tier={tier} />
				)}
			</div>
		</main>
	)
}

export default CoursesMain
