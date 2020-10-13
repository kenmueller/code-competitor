import { useRouter } from 'next/router'
import Link from 'next/link'
import { Svg } from 'react-optimized-image'

import Level from 'models/Level'
import Info from './Info'
import Schedule from './Schedule'
import Sessions from './Sessions'
import rightArrow from 'images/icons/right-arrow.svg'

import styles from 'styles/components/Level/Main.module.scss'

export interface LevelMainProps {
	number: number
	lastSession: number
}

const LevelMain = ({ number, lastSession }: LevelMainProps) => {
	const slug = useRouter().query.slug as string
	const level: Level = require(`articles/levels/${slug}/index.mdx`).meta
	
	return (
		<main className={styles.root}>
			<p className={styles.ready}>
				Check if you or your child is ready for {level.name} by taking our brief{' '}
				<Link href="/levels/[slug]/ready" as={`/levels/${slug}/ready`}>
					<a className={styles.readyLink}>
						Readiness Test
						<Svg className={styles.readyLinkIcon} src={rightArrow} />
					</a>
				</Link>
			</p>
			<Info />
			<Schedule number={number} />
			<Sessions last={lastSession} />
		</main>
	)
}

export default LevelMain
