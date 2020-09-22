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
			<table className={styles.table}>
				<tbody>
					<tr className={styles.tableRow}>
						<td className={styles.key}>Usaco level</td>
						<td className={styles.value}>{tier.title}</td>
					</tr>
					<tr className={styles.tableRow}>
						<td className={styles.key}>Ages</td>
						<td className={styles.value}>{course.ages.min}-{course.ages.max}</td>
					</tr>
					<tr className={styles.tableRow}>
						<td className={styles.key}>Book required</td>
						<td className={styles.value}>{course.book ? 'Yes' : 'No'}</td>
					</tr>
				</tbody>
			</table>
			<Link href="/courses/[slug]" as={`/courses/${course.slug}`}>
				<a className={styles.link}>Learn more</a>
			</Link>
		</div>
	</article>
)

export default TierCourseCard
