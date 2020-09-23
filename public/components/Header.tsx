import { PropsWithChildren, ReactNode } from 'react'

import styles from 'styles/components/Header.module.scss'

export interface HeaderProps extends PropsWithChildren<{}> {
	title: ReactNode
}

const Header = ({ title, children }: HeaderProps) => (
	<header className={styles.root}>
		<h1 className={styles.title}>{title}</h1>
		<p className={styles.description}>{children}</p>
	</header>
)

export default Header
