import styles from 'styles/components/Courses/Notice.module.scss'

const CoursesNotice = () => (
	<section className={styles.root}>
		<p className={styles.text}>
			Bronze, Silver, Gold, and Platinum levels correspond to official{' '}
			<a className={styles.link} href="#" rel="noopener noreferrer" target="_blank">
				USACO divisions
			</a>
		</p>
	</section>
)

export default CoursesNotice
