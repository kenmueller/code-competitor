import Head from 'next/head'
import Link from 'next/link'
import { Svg } from 'react-optimized-image'

import { src as background } from 'images/home/description.jpg'
import owl from 'images/icons/owl.svg'

import styles from 'styles/components/Home/Description.module.scss'

const HomeDescription = () => (
	<section className={styles.root}>
		<Head>
			<link key="preload-home-description" rel="preload" as="image" href={background} />
		</Head>
		<article className={styles.container}>
			<div className={styles.content}>
				<p className={styles.description}>
					Middle/high school online classes using video-conferencing and screen-sharing for a safe and instructive environment
				</p>
				<Link href="/faq">
					<a className={styles.faq}>
						Frequently Asked Questions (FAQ)
					</a>
				</Link>
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

export default HomeDescription
