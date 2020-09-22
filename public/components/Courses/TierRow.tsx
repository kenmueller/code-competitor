import cx from 'classnames'

import tiers from 'data/tiers.json'
import TierName from 'models/TierName'
import TierCard from './TierCard'

import styles from 'styles/components/Courses/TierRow.module.scss'

export interface CoursesTierRowProps {
	tier: TierName
}

const CoursesTierRow = ({ tier: tierName }: CoursesTierRowProps) => {
	const tier = tiers[tierName]
	
	return (
		<div className={cx(styles.root, styles[tierName])}>
			<TierCard tier={tier} />
			{tier.courses.map(course => (
				<article key={course.slug} className={styles.cell}>
					
				</article>
			))}
		</div>
	)
}

export default CoursesTierRow
