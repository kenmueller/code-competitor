import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'classnames'

import LevelInstance from 'models/LevelInstance'
import createStripeSession from 'lib/createStripeSession'
import handleError from 'lib/handleError'
import Spinner from 'components/Spinner'

import styles from 'styles/components/Level/ScheduleRow.module.scss'

export interface LevelScheduleRowProps {
	level: LevelInstance
}

const LevelScheduleRow = ({ level }: LevelScheduleRowProps) => {
	const slug = useRouter().query.slug as string
	const [isLoading, setIsLoading] = useState(false)
	
	const instance = level.id
	const instructorName: string = require(
		`articles/instructors/${level.instructor}.mdx`
	).meta.name
	
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
			<td className={cx(styles.value, styles.day)}>{level.day}</td>
			<td className={styles.value}>{level.start.toString()}</td>
			<td className={styles.value}>{level.weeks} week{level.weeks === 1 ? '' : 's'}</td>
			<td className={styles.value}>{level.time}</td>
			<td className={styles.value}>
				<Link href="/instructors/[slug]" as={`/instructors/${level.instructor}`}>
					<a className={styles.link}>{instructorName}</a>
				</Link>
			</td>
			<td className={styles.value}>$500</td>
			<td className={styles.value}>
				<button className={styles.button} onClick={enroll}>
					{isLoading
						? <Spinner className={styles.spinner} />
						: `Enroll (${level.spots} spots remaining)`
					}
				</button>
			</td>
		</tr>
	)
}

export default LevelScheduleRow
