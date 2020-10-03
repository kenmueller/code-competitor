import { useRef, useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import Img, { Svg } from 'react-optimized-image'
import cx from 'classnames'

import menu from 'images/icons/hamburger.svg'

import styles from 'styles/components/Navbar.module.scss'

export interface NavbarProps {
	light?: boolean
}

interface NavbarMenuLinkProps {
	title: string
	href: string
	onClick(): void
}

const NavbarMenuLink = ({ title, href, onClick }: NavbarMenuLinkProps) => (
	<div className={styles.menuLinkContainer}>
		<Link href={href}>
			<a className={styles.menuLink} onClick={onClick}>
				{title}
			</a>
		</Link>
	</div>
)

const Navbar = ({ light = false }: NavbarProps) => {
	const menuTrigger = useRef<HTMLButtonElement | null>(null)
	const menuContent = useRef<HTMLElement | null>(null)
	
	const [isMenuShowing, setIsMenuShowing] = useState(false)
	
	const toggleIsMenuShowing = useCallback(() => {
		setIsMenuShowing(isShowing => !isShowing)
	}, [setIsMenuShowing])
	
	const onBodyClick = useCallback(({ target }: MouseEvent) => {
		const trigger = menuTrigger.current
		const content = menuContent.current
		
		if (!(
			trigger === content ||
			trigger?.contains(target as Node) ||
			content === target ||
			content?.contains(target as Node)
		))
			setIsMenuShowing(false)
	}, [menuContent, setIsMenuShowing])
	
	useEffect(() => {
		if (!isMenuShowing)
			return
		
		const { body } = document
		
		body.addEventListener('click', onBodyClick)
		
		return () => body.removeEventListener('click', onBodyClick)
	}, [isMenuShowing, onBodyClick])
	
	return (
		<nav className={styles.root}>
			<Link href="/">
				<a>
					<Img
						className={styles.logo}
						src={require(`images/logos/${light ? 'light' : 'dark'}.png`)}
						alt="Logo"
						webp
					/>
				</a>
			</Link>
			<div className={styles.menu}>
				<button
					ref={menuTrigger}
					className={styles.menuTrigger}
					onClick={toggleIsMenuShowing}
					title="Menu"
					aria-haspopup
				>
					<Svg
						className={cx(styles.menuTriggerIcon, {
							[styles.lightMenuTriggerIcon]: light
						})}
						src={menu}
					/>
				</button>
				<nav
					ref={menuContent}
					className={cx(styles.menuContent, {
						[styles.menuContentShowing]: isMenuShowing
					})}
					aria-hidden={!isMenuShowing}
				>
					<NavbarMenuLink title="Courses" href="/courses" onClick={toggleIsMenuShowing} />
					<NavbarMenuLink title="Competitions" href="/competitions" onClick={toggleIsMenuShowing} />
					<NavbarMenuLink title="Instructors" href="/instructors" onClick={toggleIsMenuShowing} />
					<NavbarMenuLink title="About" href="/about" onClick={toggleIsMenuShowing} />
					<NavbarMenuLink title="FAQ" href="/faq" onClick={toggleIsMenuShowing} />
					<NavbarMenuLink title="Jobs" href="/jobs" onClick={toggleIsMenuShowing} />
					<NavbarMenuLink title="Terms" href="/terms" onClick={toggleIsMenuShowing} />
				</nav>
			</div>
		</nav>
	)
}

export default Navbar
