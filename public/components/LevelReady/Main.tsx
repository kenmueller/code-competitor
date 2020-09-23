import { useRouter } from 'next/router'

import Article from 'components/Article'

import styles from 'styles/components/LevelReady/Main.module.scss'

const LevelReadyMain = () => {
	const slug = useRouter().query.slug as string
	const Content = require(`articles/levels/${slug}/ready.mdx`).default
	
	return (
		<main className={styles.root}>
			<Article className={styles.article}>
				<Content />
			</Article>
		</main>
	)
}

export default LevelReadyMain
