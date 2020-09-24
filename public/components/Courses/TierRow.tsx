import cx from 'classnames'

import Tier from 'models/Tier'
import TierTitleCard from './TierTitleCard'
import TierLevelCard from './TierLevelCard'

import styles from 'styles/components/Courses/TierRow.module.scss'

export interface CoursesTierRowProps {
	tier: Tier
}

const CoursesTierRow = ({ tier }: CoursesTierRowProps) => (
	<div className={cx(styles.root, styles[tier.slug])}>
		<TierTitleCard className={styles.card} tier={tier} />
		{tier.levels.map(level => (
			<TierLevelCard
				key={level.slug}
				className={styles.card}
				tier={tier}
				level={level}
			/>
		))}
	</div>
)

export default CoursesTierRow
