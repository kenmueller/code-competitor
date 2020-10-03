import Img from 'react-optimized-image'

import image from 'images/home/classes.png'

import styles from 'styles/components/Home/Classes.module.scss'

const HomeClasses = () => (
	<section className={styles.root}>
		<Img
			className={styles.image}
			src={image}
			alt="Classes"
			loading="lazy"
			webp
		/>
		<article className={styles.content}>
			<h3 className={styles.title}>Classes</h3>
			<ul className={styles.list}>
				<li><p className={styles.item}>3 to 8 students</p></li>
				<li><p className={styles.item}>90 minute sessions</p></li>
				<li><p className={styles.item}>2 to 4 hours homework</p></li>
				<li><p className={styles.item}>Office hours</p></li>
				<li><p className={styles.item}>1-on-1 tutoring</p></li>
				<li><p className={styles.item}>Discussion forum</p></li>
				<li><p className={styles.item}>Grades</p></li>
			</ul>
		</article>
	</section>
)

export default HomeClasses
