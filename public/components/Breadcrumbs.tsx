import { Fragment } from 'react'
import Link from 'next/link'
import { Svg } from 'react-optimized-image'

import rightArrow from 'images/icons/right-arrow.svg'

import styles from 'styles/components/Breadcrumbs.module.scss'

export interface Breadcrumb {
	url: string
	title: string
}

export interface BreadcrumbsProps {
	trail: Breadcrumb[]
	title: string
}

const Breadcrumbs = ({ trail, title }: BreadcrumbsProps) => (
	<section className={styles.root}>
		<div className={styles.container}>
			{trail.map(({ url, title }) => (
				<Fragment key={url}>
					<Link href={url}>
						<a className={styles.link}>{title}</a>
					</Link>
					<Svg className={styles.divider} src={rightArrow} />
				</Fragment>
			))}
			<span className={styles.title}>{title}</span>
		</div>
	</section>
)

export default Breadcrumbs
