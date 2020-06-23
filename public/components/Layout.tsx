import { PropsWithChildren } from 'react'
import Head from 'next/head'

import styles from 'styles/Layout.module.scss'

export interface LayoutProps {
	title: string
	description: string
}

const Layout = ({
	title,
	description,
	children
}: PropsWithChildren<LayoutProps>) => {
	return (
		<div className={styles.root}>
			<Head>
				<meta
					key="theme-color"
					name="theme-color"
					content="#292d3e"
				/>
				<meta
					key="description"
					name="description"
					content={description}
				/>
				<title key="title">
					{title}
				</title>
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
