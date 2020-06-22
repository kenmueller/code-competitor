import { PropsWithChildren } from 'react'
import Head from 'next/head'

import styles from 'styles/Layout.module.scss'

const Layout = ({
	title,
	children
}: PropsWithChildren<{ title: string }>) => {
	return (
		<div className={styles.root}>
			<Head>
				<title>{title}</title>
			</Head>
			<h1 className={styles.title}>
				Code Competitor
			</h1>
			<div className={styles.container}>
				{children}
			</div>
		</div>
	)
}

export default Layout
