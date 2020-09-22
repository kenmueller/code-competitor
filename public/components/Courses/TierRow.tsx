import cx from 'classnames'

import tiers from 'data/tiers.json'
import TierName from 'models/TierName'
import TierTitleCard from './TierTitleCard'
import TierCourseCard from './TierCourseCard'

import styles from 'styles/components/Courses/TierRow.module.scss'

export interface CoursesTierRowProps {
	tier: TierName
}

const CoursesTierRow = ({ tier: tierName }: CoursesTierRowProps) => {
	const tier = tiers[tierName]
	
	return (
		<div className={cx(styles.root, styles[tierName])}>
			<TierTitleCard className={styles.card} tier={tier} />
			{tier.courses.map(course => (
				<TierCourseCard
					key={course.slug}
					className={styles.card}
					tier={tier}
					course={course}
				/>
			))}
		</div>
	)
}

export default CoursesTierRow
