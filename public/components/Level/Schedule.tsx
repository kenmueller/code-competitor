import { useState, useCallback } from 'react'
import Link from 'next/link'

import createStripeSession from 'lib/createStripeSession'
import handleError from 'lib/handleError'
import Spinner from 'components/Spinner'

import styles from 'styles/components/Level/Schedule.module.scss'

export interface LevelScheduleProps {
	number: number
}

const LevelSchedule = ({ number }: LevelScheduleProps) => {
	const [isLoading, setIsLoading] = useState(false)
	
	const enroll = useCallback(async () => {
		try {
			setIsLoading(true)
			await createStripeSession('level', { level: number })
		} catch (error) {
			handleError(error)
		}
		
		setIsLoading(false)
	}, [number])
	
	return (
		<section id="schedule" className={styles.root}>
			<h3 className={styles.title}>When</h3>
			<table className={styles.table}>
				<thead>
					<tr className={styles.labels}>
						<td className={styles.label}>Every</td>
						<td className={styles.label}>Starts</td>
						<td className={styles.label}>Duration</td>
						<td className={styles.label}>Time</td>
						<td className={styles.label}>Instructor</td>
						<td className={styles.label}>Fees</td>
						<td className={styles.label} />
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className={styles.value}>Wednesday</td>
						<td className={styles.value}>Sep 2, 2020</td>
						<td className={styles.value}>16 weeks</td>
						<td className={styles.value}>4:30-6:00 PM</td>
						<td className={styles.value}>
							<Link href="/instructors/[slug]" as="/instructors/ken-mueller">
								<a className={styles.link}>Ken Mueller</a>
							</Link>
						</td>
						<td className={styles.value}>$500</td>
						<td className={styles.value}>
							<button className={styles.button} onClick={enroll}>
								{isLoading
									? <Spinner className={styles.spinner} />
									: 'Enroll'
								}
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}

export default LevelSchedule
