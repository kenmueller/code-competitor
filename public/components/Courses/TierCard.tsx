import { Svg } from 'react-optimized-image'

import Tier from 'models/Tier'
import medal from 'images/icons/medal.svg'

import styles from 'styles/components/Courses/TierCard.module.scss'

export interface CoursesTierCardProps {
	tier: Tier
}

const CoursesTierCard = ({ tier }: CoursesTierCardProps) => (
	<article className={styles.root}>
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

export default CoursesTierCard
