import Link from 'next/link'
import cx from 'classnames'

import Tier from 'models/Tier'
import Level from 'models/Level'

import styles from 'styles/components/Courses/TierLevelCard.module.scss'

export interface TierLevelCardProps {
	className?: string
	tier: Tier
	level: Level
}

const TierLevelCard = ({ className, tier, level }: TierLevelCardProps) => (
	<article className={cx(styles.root, className)}>
		<p className={styles.name}>{level.name}</p>
		<div className={styles.info}>
			<div className={styles.rows}>
				<p className={styles.row}>
					<span className={styles.key}>Usaco level</span>
					<span className={styles.value}>{tier.title}</span>
				</p>
				<hr className={styles.divider} />
				<p className={styles.row}>
					<span className={styles.key}>Ages</span>
					<span className={styles.value}>{level.ages.min}-{level.ages.max}</span>
				</p>
				<hr className={styles.divider} />
				<p className={styles.row}>
					<span className={styles.key}>Book required</span>
					<span className={styles.value}>{level.bookRequired ? 'Yes' : 'No'}</span>
				</p>
			</div>
			<Link href="/levels/[slug]" as={`/levels/${level.slug}`}>
				<a className={styles.link}>Learn more</a>
			</Link>
		</div>
	</article>
)

export default TierLevelCard
