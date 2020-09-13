import Link from 'next/link'

import styles from 'styles/components/Navbar.module.scss'

export interface NavbarProps {
	light?: boolean
}

const Navbar = ({ light = false }: NavbarProps) => {
	const logoPrefix = light ? 'white' : 'blue'
	
	return (
		<nav className={styles.root}>
			<Link href="/">
				<a>
					<picture>
						<source
							srcSet={require(`images/${logoPrefix}-logo.png?webp`)}
							type="image/webp"
						/>
						<img
							className={styles.logo}
							src={require(`images/${logoPrefix}-logo.png`)}
							alt="Logo"
						/>
					</picture>
				</a>
			</Link>
			<button className={styles.menu}>
				<span className={styles.menuRow} />
				<span className={styles.menuRow} />
				<span className={styles.menuRow} />
			</button>
		</nav>
	)
}

export default Navbar
