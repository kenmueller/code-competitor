import Link from 'next/link'
import cx from 'classnames'

import { Filter } from './Main'

import styles from 'styles/components/Courses/FilterButton.module.scss'

export interface CoursesFilterButtonProps {
	value: Filter
	filter: Filter
	children: string
}

const CoursesFilterButton = ({ value, filter, children }: CoursesFilterButtonProps) => (
	<Link
		href={`/courses${value ? '/[tier]' : ''}`}
		as={`/courses${value ? `/${value}` : ''}`}
		scroll={false}
	>
		<a className={cx(styles.root, { [styles.selected]: value === filter })}>
			{children}
		</a>
	</Link>
)

export default CoursesFilterButton
