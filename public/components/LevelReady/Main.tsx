import { useRouter } from 'next/router'

import Article from 'components/Article'

import styles from 'styles/components/LevelReady/Main.module.scss'

const LevelReadyMain = () => {
	const slug = useRouter().query.slug as string
	const { notice, default: Content } = require(`articles/levels/${slug}/ready.mdx`)
	
	return (
		<main className={styles.root}>
			{(notice ?? true) && (
				<p className={styles.notice}>
					Submit C++ code to <a
						className={styles.link}
						href="mailto:learn@codecompetitor.com"
					>
						learn@codecompetitor.com
					</a> for feedback
				</p>
			)}
			<Article className={styles.article}>
				<Content />
			</Article>
		</main>
	)
}

export default LevelReadyMain
