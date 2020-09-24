import { useRouter } from 'next/router'

import Article from 'components/Article'

import styles from 'styles/components/Level/Info.module.scss'

const LevelInfo = () => {
	const slug = useRouter().query.slug as string
	
	const Description = require(`articles/levels/${slug}/index.mdx`).default
	const Who = require(`articles/levels/${slug}/who.mdx`).default
	const What = require(`articles/levels/${slug}/what.mdx`).default
	const Why = require(`articles/levels/${slug}/why.mdx`).default
	
	return (
		<section className={styles.root}>
			<div>
				<div className={styles.article}>
					<h3 className={styles.title}>Description</h3>
					<Article className={styles.articleContent}>
						<Description />
					</Article>
				</div>
				<div className={styles.article}>
					<h3 className={styles.title}>Who</h3>
					<Article className={styles.articleContent}>
						<Who />
					</Article>
				</div>
				<div className={styles.article}>
					<h3 className={styles.title}>What</h3>
					<Article className={styles.articleContent}>
						<What />
					</Article>
				</div>
				<div className={styles.article}>
					<h3 className={styles.title}>Why</h3>
					<Article className={styles.articleContent}>
						<Why />
					</Article>
				</div>
			</div>
			<aside className={styles.aside}>
				
			</aside>
		</section>
	)
}

export default LevelInfo
