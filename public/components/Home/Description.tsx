import { Svg } from 'react-optimized-image'

import owl from 'images/icons/owl.svg'

import styles from 'styles/components/Description.module.scss'

const Description = () => (
	<section className={styles.root}>
		<article className={styles.container}>
			<div className={styles.content}>
				<p className={styles.description}>
					Middle/high school online classes using video-conferencing and screen-sharing for a safe and instructive environment
				</p>
				<button className={styles.faq}>
					Frequently Asked Questions (FAQ)
				</button>
				<aside className={styles.popUp}>
					<Svg className={styles.popUpIcon} src={owl} />
					<p className={styles.popUpText}>
						<u>11 live courses</u> for<br />
						<strong>12 to 19 year olds</strong> to go from<br />
						<u>zero knowledge</u> to expert C++ coder
					</p>
				</aside>
			</div>
		</article>
	</section>
)

export default Description
