import Article from 'components/Article'
import Job, { JobCategory } from 'models/Job'

import styles from 'styles/components/Jobs/Job.module.scss'

export interface JobsJobProps {
	category: JobCategory
	job: Job
}

const JobsJob = ({ category, job }: JobsJobProps) => {
	const Description = require(`articles/jobs/${category.name}/${job.name}/description.mdx`).default
	const Requirements = require(`articles/jobs/${category.name}/${job.name}/requirements.mdx`).default
	const Compensation = require(`articles/jobs/${category.name}/${job.name}/requirements.mdx`).default
	
	return (
		<article id={job.slug} className={styles.root}>
			<h3 className={styles.title}>{job.name}</h3>
			<Article>
				<Description />
			</Article>
			<Article>
				<Requirements />
			</Article>
			<Article>
				<Compensation />
			</Article>
		</article>
	)
}

export default JobsJob
