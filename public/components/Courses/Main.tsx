import { useCallback, useState } from 'react'

import FilterButton from './FilterButton'

import styles from 'styles/components/Courses/Main.module.scss'

export type Filter = null | 'bronze' | 'silver' | 'gold' | 'platinum'

const CoursesMain = () => {
	const [filter, setFilter] = useState<Filter>(null)
	
	return (
		<main className={styles.root}>
			<div className={styles.filters}>
				<FilterButton value={null} filter={filter} setFilter={setFilter}>
					All
				</FilterButton>
				<FilterButton value="bronze" filter={filter} setFilter={setFilter}>
					Bronze
				</FilterButton>
				<FilterButton value="silver" filter={filter} setFilter={setFilter}>
					Silver
				</FilterButton>
				<FilterButton value="gold" filter={filter} setFilter={setFilter}>
					Gold
				</FilterButton>
				<FilterButton value="platinum" filter={filter} setFilter={setFilter}>
					Platinum
				</FilterButton>
			</div>
		</main>
	)
}

export default CoursesMain
