import Link from 'next/link'
import Img, { Svg } from 'react-optimized-image'
import cx from 'classnames'

import menu from 'images/icons/hamburger.svg'

import styles from 'styles/components/Navbar.module.scss'

export interface NavbarProps {
	light?: boolean
}

const Navbar = ({ light = false }: NavbarProps) => (
	<nav className={styles.root}>
		<Link href="/">
			<a>
				<Img
					className={styles.logo}
					src={require(`images/${light ? 'white' : 'blue'}-logo.png`)}
					alt="Logo"
					webp
				/>
			</a>
		</Link>
		<button className={styles.menu}>
			<Svg
				className={cx(styles.menuIcon, { [styles.lightMenuIcon]: light })}
				src={menu}
			/>
		</button>
	</nav>
)

export default Navbar
