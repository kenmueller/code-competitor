import { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Svg } from 'react-optimized-image'

import Level from 'models/Level'
import rightArrow from 'images/icons/right-arrow.svg'

import styles from 'styles/components/Level/Main.module.scss'

const LevelMain = () => {
	const slug = useRouter().query.slug as string
	const { default: Description, meta: level } = require(
		`articles/levels/${slug}/index.mdx`
	) as { default: FC, meta: Level }
	
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
		</main>
	)
}

export default LevelMain
