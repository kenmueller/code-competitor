import { FC } from 'react'
import { useRouter } from 'next/router'
import { Svg } from 'react-optimized-image'

import Level from 'models/Level'
import Article from 'components/Article'
import gift from 'images/icons/gift.svg'

import styles from 'styles/components/Level/Info.module.scss'

const LevelInfo = () => {
	const slug = useRouter().query.slug as string
	const {
		default: Description,
		meta: level
	} = require(`articles/levels/${slug}/index.mdx`) as {
		default: FC
		meta: Level
	}
	
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
					<h3 className={styles.infoTitle}>Course Info</h3>
					<div className={styles.rows}>
						<p className={styles.row}>
							<span className={styles.key}>Usaco level</span>
							<span className={styles.value}>{level.usacoLevel}</span>
						</p>
						<hr className={styles.divider} />
						<p className={styles.row}>
							<span className={styles.key}>Ages</span>
							<span className={styles.value}>{level.ages.min}-{level.ages.max}</span>
						</p>
						<hr className={styles.divider} />
						<p className={styles.row}>
							<span className={styles.key}>Book required</span>
							<span className={styles.value}>{level.bookRequired ? 'Yes' : 'No'}</span>
						</p>
					</div>
					<p className={styles.price}>${level.price}</p>
					<a className={styles.scheduleLink} href="#schedule">
						Class schedule
					</a>
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
