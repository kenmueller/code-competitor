import { useCallback } from 'react'
import cx from 'classnames'

import { Filter } from './Main'

import styles from 'styles/components/Courses/FilterButton.module.scss'

export interface CoursesFilterButtonProps {
	value: Filter
	filter: Filter
	setFilter(filter: Filter): void
	children: string
}

const CoursesFilterButton = ({ value, filter, setFilter, children }: CoursesFilterButtonProps) => {
	const onClick = useCallback(() => {
		setFilter(value)
	}, [setFilter, value])
	
	return (
		<button
			className={cx(styles.root, { [styles.selected]: value === filter })}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default CoursesFilterButton
