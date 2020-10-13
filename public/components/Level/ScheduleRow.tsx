import { useState, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'classnames'

import LevelInstance from 'models/LevelInstance'
import createStripeSession from 'lib/createStripeSession'
import handleError from 'lib/handleError'
import Spinner from 'components/Spinner'

import styles from 'styles/components/Level/ScheduleRow.module.scss'
import formatDate from 'lib/formatDate'

export interface LevelScheduleRowProps {
	level: LevelInstance
}

const LevelScheduleRow = ({ level }: LevelScheduleRowProps) => {
	const slug = useRouter().query.slug as string
	const [isLoading, setIsLoading] = useState(false)
	
	const { id: instance, days, start, weeks, time, instructor, spots } = level
	
	const startString = useMemo(() => formatDate(start), [start])
	const instructorName: string = require(`articles/instructors/${instructor}.mdx`).meta.name
	
	const enroll = useCallback(async () => {
		try {
			setIsLoading(true)
			await createStripeSession('level', { slug, instance })
		} catch (error) {
			handleError(error)
		}
		
		setIsLoading(false)
	}, [slug, instance])
	
	return (
		<tr>
			<td className={cx(styles.value, styles.days)}>{days.join(' & ')}</td>
			<td className={styles.value}>{startString}</td>
			<td className={styles.value}>{weeks} week{weeks === 1 ? '' : 's'}</td>
			<td className={styles.value}>{time}</td>
			<td className={styles.value}>
				<Link href="/instructors/[slug]" as={`/instructors/${instructor}`}>
					<a className={styles.link}>{instructorName}</a>
				</Link>
			</td>
			<td className={styles.value}>$500</td>
			<td className={styles.value}>
				<button className={styles.button} onClick={enroll}>
					{isLoading
						? <Spinner className={styles.spinner} />
						: `Enroll (${spots} spots remaining)`
					}
				</button>
			</td>
		</tr>
	)
}

export default LevelScheduleRow
