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
		<table>
			<thead>
				<tr>
					<th>{labels[0]}</th>
					<th>{labels[1]}</th>
				</tr>
			</thead>
			<tbody>
				{rows.map((row, i) => (
					<tr key={i}>
						<td>{row[0]}</td>
						<td>{row[1]}</td>
						<td><a href={row[2]}>Learn more</a></td>
					</tr>
				))}
			</tbody>
		</table>
	</article>
)

export default CompetitionsCompetition
