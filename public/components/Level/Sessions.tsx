import { useMemo } from 'react'

import Session from './Session'

import styles from 'styles/components/Level/Sessions.module.scss'

export interface LevelSessionsProps {
	last: number
}

const LevelSessions = ({ last }: LevelSessionsProps) => {
	const sessions = useMemo(() => (
		Array.from(Array(last + 1).keys())
	), [last])
	
	return (
		<section className={styles.root}>
			<h3 className={styles.title}>Sessions</h3>
			<div className={styles.sessions}>
				{sessions.map(id => (
					<Session key={id} id={id} />
				))}
			</div>
		</section>
	)
}

export default LevelSessions
