import { Svg } from 'react-optimized-image'
import cx from 'classnames'

import Tier from 'models/Tier'
import medal from 'images/icons/medal.svg'

import styles from 'styles/components/Courses/TierTitleCard.module.scss'

export interface CoursesTierCardProps {
	className?: string
	tier: Tier
}

const CoursesTierTitleCard = ({ className, tier }: CoursesTierCardProps) => (
	<article className={cx(styles.root, className)}>
		<Svg className={styles.icon} src={medal} />
		<p className={styles.title}>{tier.title}</p>
		<p className={styles.ages}>
			Ages {tier.ages.min} - {tier.ages.max}
		</p>
		<p className={styles.description}>
			{tier.description}
		</p>
	</article>
)

export default CoursesTierTitleCard
