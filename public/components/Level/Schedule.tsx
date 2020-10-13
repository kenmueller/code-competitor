import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import useLevelInstances from 'hooks/useLevelInstances'
import ScheduleRow from './ScheduleRow'
import Spinner from 'components/Spinner'

import styles from 'styles/components/Level/Schedule.module.scss'

const LABEL_COUNT = 7

const LevelSchedule = () => {
	const slug = useRouter().query.slug as string | undefined
	const levels = useLevelInstances(slug)
	
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
					{levels
						? levels.map(level => <ScheduleRow key={level.id} level={level} />)
						: (
							<tr>
								<td colSpan={LABEL_COUNT}>
									<Spinner className={styles.spinner} />
								</td>
							</tr>
						)
					}
				</tbody>
			</table>
		</section>
	)
}

export default LevelSchedule
