import styles from 'styles/components/Description.module.scss'

const Description = () => (
	<section className={styles.root}>
		<article className={styles.text}>
			<p className={styles.description}>
				Middle/high school online classes using video-conferencing and screen-sharing for a safe and instructive environment
			</p>
			<button className={styles.faq}>
				Frequently Asked Questions (FAQ)
			</button>
		</article>
		<picture className={styles.imageContainer}>
			<source srcSet={require('images/description.png?webp')} type="image/webp" />
			<img
				className={styles.image}
				src={require('images/description.png')}
				alt="Two students learning"
			/>
		</picture>
	</section>
)

export default Description
