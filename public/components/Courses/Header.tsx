import styles from 'styles/components/Courses/Header.module.scss'

const CoursesHeader = () => (
	<header className={styles.root}>
		<h1 className={styles.title}>Courses</h1>
		<p className={styles.description}>
			"In an application where we are processing millions of objects,
			it is not unusual to be able to make a program millions of times
			faster by using a well-designed algorithm."
			<br /><br />
			- Algorithms, by Sedgewick and Wayne
		</p>
	</header>
)

export default CoursesHeader
