import Link from 'next/link'
import cx from 'classnames'

import { Filter } from './Main'

import styles from 'styles/components/Courses/FilterButton.module.scss'

export interface CoursesFilterButtonProps {
	value: Filter
	filter: Filter
}

const CoursesFilterButton = ({ value, filter }: CoursesFilterButtonProps) => (
	<Link href={`/courses${value ? `/${value}` : ''}`} scroll={false}>
		<a className={cx(styles.root, { [styles.selected]: value === filter })}>
			{value ?? 'all'}
		</a>
	</Link>
)

export default CoursesFilterButton
