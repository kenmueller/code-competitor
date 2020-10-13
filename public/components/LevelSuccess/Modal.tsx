import Link from 'next/link'
import { Svg } from 'react-optimized-image'

import rightArrow from 'images/icons/right-arrow.svg'

import styles from 'styles/components/LevelSuccess/Modal.module.scss'

export interface LevelSuccessModalProps {
	name: string
}

const LevelSuccessModal = ({ name }: LevelSuccessModalProps) => {
	
	return (
		<div className={styles.root} role="presentation">
			<div className={styles.content}>
				<p className={styles.icon} role="img" aria-hidden>🥳</p>
				<p className={styles.title}>
					You've registered for <span className={styles.name}>{name}</span>
				</p>
				<Link href="/courses">
					<a className={styles.link}>
						Courses
						<Svg className={styles.linkIcon} src={rightArrow} />
					</a>
				</Link>
			</div>
		</div>
	)
}

export default LevelSuccessModal
