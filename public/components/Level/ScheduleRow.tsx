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

const ENROLL_MESSAGE_MAX_SPOTS = 3

const LevelScheduleRow = ({ level }: LevelScheduleRowProps) => {
	const slug = useRouter().query.slug as string
	const [isLoading, setIsLoading] = useState(false)
	
	const { id: instance, days, start, weeks, time, instructor, spots } = level
	
	const startString = useMemo(() => formatDate(start), [start])
	const instructorName: string = require(`articles/instructors/${instructor}.mdx`).meta.name
	const isFull = spots <= 0
	
	const enroll = useCallback(async () => {
		if (isFull || isLoading)
			return
		
		try {
			setIsLoading(true)
			await createStripeSession('level', { slug, instance })
		} catch (error) {
			handleError(error)
		}
		
		setIsLoading(false)
	}, [isFull, isLoading, slug, instance, setIsLoading])
	
	return (
		<tr className={styles.root}>
			<td className={cx(styles.value, styles.days)}>{days.join(' & ')}</td>
			<td className={cx(styles.value, styles.start)}>{startString}</td>
			<td className={styles.value}>{weeks} week{weeks === 1 ? '' : 's'}</td>
			<td className={styles.value}>{time}</td>
			<td className={cx(styles.value, styles.instructorLinkContainer)}>
				<Link href={`/instructors/${instructor}`}>
					<a className={styles.instructorLink}>{instructorName}</a>
				</Link>
			</td>
			<td className={cx(styles.value, styles.price)}>$500</td>
			<td className={cx(styles.value, styles.enrollContainer)}>
				<div className={styles.enrollInnerContainer}>
					<button
						className={cx(styles.enrollButton, {
							[styles.enrollButtonFull]: isFull,
							[styles.enrollButtonLoading]: isLoading
						})}
						onClick={enroll}
					>
						{isLoading
							? <Spinner className={styles.enrollSpinner} />
							: isFull ? 'Full' : 'Enroll'
						}
					</button>
					{spots > 0 && spots <= ENROLL_MESSAGE_MAX_SPOTS && (
						<p className={styles.enrollMessage}>
							<span className={styles.spots}>
								{spots}
							</span> spot{spots === 1 ? '' : 's'} left
						</p>
					)}
				</div>
			</td>
		</tr>
	)
}

export default LevelScheduleRow
