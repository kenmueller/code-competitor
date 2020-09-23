import Link from 'next/link'
import cx from 'classnames'

import Tier, { TierCourse } from 'models/Tier'

import styles from 'styles/components/Courses/TierCourseCard.module.scss'

export interface TierCourseCardProps {
	className?: string
	tier: Tier
	course: TierCourse
}

const TierCourseCard = ({ className, tier, course }: TierCourseCardProps) => (
	<article className={cx(styles.root, className)}>
		<p className={styles.name}>{course.name}</p>
		<div className={styles.info}>
			<div className={styles.rows}>
				<p className={styles.row}>
					<span className={styles.key}>Usaco level</span>
					<span className={styles.value}>{tier.title}</span>
				</p>
				<hr className={styles.divider} />
				<p className={styles.row}>
					<span className={styles.key}>Ages</span>
					<span className={styles.value}>{course.ages.min}-{course.ages.max}</span>
				</p>
				<hr className={styles.divider} />
				<p className={styles.row}>
					<span className={styles.key}>Book required</span>
					<span className={styles.value}>{course.book ? 'Yes' : 'No'}</span>
				</p>
			</div>
			<Link href="/courses/[slug]" as={`/courses/${course.slug}`}>
				<a className={styles.link}>Learn more</a>
			</Link>
		</div>
	</article>
)

export default TierCourseCard
