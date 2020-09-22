import Link from 'next/link'
import { Svg } from 'react-optimized-image'

import rightArrow from 'images/icons/right-arrow.svg'

import styles from 'styles/components/Courses/Breadcrumbs.module.scss'

const CoursesBreadcrumbs = () => (
	<section className={styles.root}>
		<Link href="/">
			<a className={styles.link}>Home</a>
		</Link>
		<Svg className={styles.divider} src={rightArrow} />
		<span className={styles.this}>Course Catalog</span>
	</section>
)

export default CoursesBreadcrumbs
