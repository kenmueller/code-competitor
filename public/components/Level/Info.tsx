import { useRouter } from 'next/router'
import { Svg } from 'react-optimized-image'

import Article from 'components/Article'
import gift from 'images/icons/gift.svg'

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
				<article className={styles.info}>
					
				</article>
				<article className={styles.gift}>
					<Svg className={styles.giftIcon} src={gift} />
					<p className={styles.giftMessage}>
						If you can’t afford to pay for this course, please email <a
							className={styles.giftMessageLink}
							href="mailto:learn@codecompetitor.com"
						>
							learn@codecompetitor.com
						</a>. Nobody should miss out on these incredibly valuable skills just due to money.
					</p>
				</article>
			</aside>
		</section>
	)
}

export default LevelInfo
