import Article from 'components/Article'
import Content from 'articles/about.mdx'

import styles from 'styles/components/About/Main.module.scss'

const AboutMain = () => (
	<main className={styles.root}>
		<Article className={styles.article}>
			<Content />
		</Article>
	</main>
)

export default AboutMain
