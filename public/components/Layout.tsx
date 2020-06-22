import { ReactNode } from 'react'
import Head from 'next/head'

import styles from 'styles/Layout.module.scss'

export interface LayoutProps {
	title: string
	innerTitle: string
	children: ReactNode
}

const Layout = ({
	title,
	innerTitle,
	children: description
}: LayoutProps) => {
	return (
		<div className={styles.root}>
			<Head>
				<title>{title}</title>
			</Head>
			<h1 className={styles.title}>
				{title}
			</h1>
			<div className={styles.container}>
				<h2 className={styles.innerTitle}>
					{innerTitle}
				</h2>
				<p className={styles.description}>
					{description}
				</p>
			</div>
		</div>
	)
}

export default Layout
