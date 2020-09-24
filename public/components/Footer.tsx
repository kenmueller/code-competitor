import Link from 'next/link'
import { Svg } from 'react-optimized-image'

import phone from 'images/icons/phone.svg'
import mail from 'images/icons/mail.svg'

import styles from 'styles/components/Footer.module.scss'

const FooterNavigationLink = ({ title, href }: { title: string, href: string }) => (
	<Link href={href}>
		<a className={styles.navigationLink}>{title}</a>
	</Link>
)

const Footer = () => (
	<footer className={styles.root}>
		<div className={styles.contactLinks}>
			<a className={styles.contactLink} href="tel:4242186497">
				<Svg className={styles.contactLinkIcon} src={phone} />
				(424) 218-6497
			</a>
			<a className={styles.contactLink} href="mailto:learn@codecompetitor.com">
				<Svg className={styles.contactLinkIcon} src={mail} />
				learn@codecompetitor.com
			</a>
		</div>
		<p className={styles.copyright}>
			&copy; Code Competitor 2020. All rights reserved.
		</p>
		<nav className={styles.navigation}>
			<FooterNavigationLink title="Courses" href="/courses" />
			<FooterNavigationLink title="Competitions" href="/competitions" />
			<FooterNavigationLink title="Instructors" href="/instructors" />
			<FooterNavigationLink title="About" href="/about" />
			<FooterNavigationLink title="FAQ" href="/faq" />
			<FooterNavigationLink title="Jobs" href="/jobs" />
			<FooterNavigationLink title="Terms" href="/terms" />
		</nav>
	</footer>
)

export default Footer
