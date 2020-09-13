import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import styles from 'styles/components/Footer.module.scss'

const Footer = () => (
	<footer className={styles.root}>
		<div className={styles.contactLinks}>
			<a className={styles.contactLink} href="tel:4242186497">
				<FontAwesomeIcon className={styles.contactLinkIcon} icon={faPhone} />
				(424) 218-6497
			</a>
			<a className={styles.contactLink} href="mailto:learn@codecompetitor.com">
				<FontAwesomeIcon className={styles.contactLinkIcon} icon={faEnvelope} />
				learn@codecompetitor.com
			</a>
		</div>
		<p className={styles.copyright}>
			&copy; Code Competitor 2020. All rights reserved.
		</p>
		<nav className={styles.navigation}>
			<Link href="/courses">
				<a className={styles.navigationLink}>Courses</a>
			</Link>
			<Link href="/competitions">
				<a className={styles.navigationLink}>Competitions</a>
			</Link>
			<Link href="/about">
				<a className={styles.navigationLink}>About</a>
			</Link>
			<Link href="/faq">
				<a className={styles.navigationLink}>FAQ</a>
			</Link>
			<Link href="/jobs">
				<a className={styles.navigationLink}>Jobs</a>
			</Link>
			<Link href="/terms">
				<a className={styles.navigationLink}>Terms</a>
			</Link>
		</nav>
	</footer>
)

export default Footer
