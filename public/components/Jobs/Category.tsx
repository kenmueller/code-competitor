import { JobCategory } from 'models/Job'
import Job from './Job'

import styles from 'styles/components/Jobs/Category.module.scss'

export interface JobsCategoryProps {
	category: JobCategory
}

const JobsCategory = ({ category }: JobsCategoryProps) => (
	<section className={styles.root}>
		<h2 className={styles.title}>{category.name}</h2>
		<hr className={styles.divider} />
		{category.jobs.map(job => (
			<Job key={job.slug} category={category} job={job} />
		))}
	</section>
)

export default JobsCategory
