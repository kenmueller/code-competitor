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
			<div className={styles.articles}>
				<div className={styles.description}>
					<h4 className={styles.subtitle}>Description</h4>
					<Article>
						<Description />
					</Article>
				</div>
				<div className={styles.requirements}>
					<h4 className={styles.subtitle}>Requirements</h4>
					<Article>
						<Requirements />
					</Article>
				</div>
				<div className={styles.compensation}>
					<h4 className={styles.subtitle}>Compensation</h4>
					<Article>
						<Compensation />
					</Article>
				</div>
			</div>
			<p className={styles.notice}>
				To apply, submit a brief statement to <a
					className={styles.noticeLink}
					href="mailto:learn@codecompetitor.com"
				>
					learn@codecompetitor.com
				</a> detailing your interest, availability, and related experience
			</p>
		</article>
	)
}

export default JobsJob
