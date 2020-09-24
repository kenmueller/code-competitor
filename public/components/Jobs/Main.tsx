import { Fragment } from 'react'

import { JobCategory } from 'models/Job'
import Category from './Category'

import styles from 'styles/components/Jobs/Main.module.scss'

export interface JobsMainProps {
	categories: JobCategory[]
}

const JobsMain = ({ categories }: JobsMainProps) => (
	<main className={styles.root}>
		<div className={styles.container}>
			<h3 className={styles.title}>
				Working with Code Competitor
			</h3>
			<p className={styles.description}>
				We're a bootstrapped startup founded by several Cornell University Computer Science graduates who want to make top notch CS education a reality for students worldwide. Our core belief is that Computer Science can be taught in a personalized real-time manner and still scale. Our staff develops the curricula, technology, and relationships that ensure a seamless experience for novices and expert students alike.
				<br /><br />
				Working at Code Competitor is about making a direct impact on the lives of people we can see, not just accounts or users. Join us to break all limits on how much kids can learn and apply in the world.
			</p>
			<h3 className={styles.title}>
				Open positions
			</h3>
			<table className={styles.table}>
				<tbody>
					{categories.map(category => (
						<Fragment key={category.slug}>
							{category.jobs.map(job => (
								<tr key={job.slug} className={styles.row}>
									<td className={styles.value}>{job.name}</td>
									<td className={styles.value}>
										<a className={styles.link} href={`#${job.slug}`}>
											Learn more
										</a>
									</td>
								</tr>
							))}
						</Fragment>
					))}
				</tbody>
			</table>
			{categories.map(category => (
				<Category key={category.slug} category={category} />
			))}
		</div>
	</main>
)

export default JobsMain
