import Article from 'components/Article'
import Content from 'articles/terms.mdx'

import styles from 'styles/components/Terms/Main.module.scss'

const TermsMain = () => (
	<main className={styles.root}>
		<Article className={styles.article}>
			<Content />
		</Article>
	</main>
)

export default TermsMain
