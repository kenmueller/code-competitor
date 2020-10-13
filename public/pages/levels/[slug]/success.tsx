import { useRouter } from 'next/router'
import Confetti from 'react-confetti'

import useWindowSize from 'hooks/useWindowSize'
import LevelPage, { LevelPageProps } from 'components/Level'
import Modal from 'components/LevelSuccess/Modal'

import styles from 'styles/components/LevelSuccess/index.module.scss'

const LevelSuccess = (props: LevelPageProps) => {
	const slug = useRouter().query.slug as string
	const size = useWindowSize()
	
	const { name } = require(`articles/levels/${slug}/index.mdx`).meta
	
	return (
		<>
			<div className={styles.page}>
				<LevelPage {...props} />
			</div>
			<Modal name={name} />
			{size && (
				<Confetti
					{...size}
					className={styles.confetti}
					numberOfPieces={300}
					recycle={false}
				/>
			)}
		</>
	)
}

export default LevelSuccess

export { default as getStaticPaths } from 'lib/level/getStaticPaths'
export { default as getStaticProps } from 'lib/level/getStaticProps'
