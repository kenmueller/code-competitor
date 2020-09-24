import { PropsWithChildren, ReactNode } from 'react'
import cx from 'classnames'

import styles from 'styles/components/Header.module.scss'

export interface HeaderProps extends PropsWithChildren<{}> {
	className?: string
	title: ReactNode
}

const Header = ({ className, title, children }: HeaderProps) => (
	<header className={cx(styles.root, className)}>
		<h1 className={styles.title}>{title}</h1>
		<p className={styles.description}>{children}</p>
	</header>
)

export default Header
