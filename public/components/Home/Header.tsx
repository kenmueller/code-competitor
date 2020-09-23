import Link from 'next/link'
import cx from 'classnames'

import styles from 'styles/components/Home/Header.module.scss'

const HomeHeader = () => (
	<header className={styles.root}>
		<h1 className={styles.title}>
			From 0 to Competitive
		</h1>
		<p className={styles.subtitle}>
			Creating apps won't get you into a <em>Top University</em><br />
			Placing in a <strong>Coding Competition</strong> can
		</p>
		<nav className={styles.navigation}>
			<Link href="/">
				<a className={cx(styles.navigationLink, styles.startNavigationLink)}>
					Start with Basics
				</a>
			</Link>
			<Link href="/courses">
				<a className={cx(styles.navigationLink, styles.catalogNavigationLink)}>
					Course Catalog
				</a>
			</Link>
		</nav>
	</header>
)

export default HomeHeader
