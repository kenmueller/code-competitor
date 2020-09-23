import styles from 'styles/components/Competitions/Competition.module.scss'

export interface CompetitionsCompetitionProps {
	title: string
	description: string
	labels: [string, string]
	rows: [string, string, string][]
}

const CompetitionsCompetition = ({ title, description, labels, rows }: CompetitionsCompetitionProps) => (
	<article className={styles.root}>
		<h2 className={styles.title}>{title}</h2>
		<p className={styles.description}>{description}</p>
		<table className={styles.table}>
			<thead>
				<tr className={styles.labels}>
					<th className={styles.label}>{labels[0]}</th>
					<th className={styles.label}>{labels[1]}</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{rows.map((row, i) => (
					<tr key={i} className={styles.row}>
						<td className={styles.value}>{row[0]}</td>
						<td className={styles.value}>{row[1]}</td>
						<td className={styles.value}>
							<a className={styles.link} href={row[2]}>
								Learn more
							</a>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</article>
)

export default CompetitionsCompetition
