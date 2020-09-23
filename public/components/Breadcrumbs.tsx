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

const BreadcrumbsSegment = ({ url, title }: Breadcrumb) => (
	<>
		<Link href={url}>
			<a className={styles.link}>{title}</a>
		</Link>
		<Svg className={styles.divider} src={rightArrow} />
	</>
)

const Breadcrumbs = ({ trail, title }: BreadcrumbsProps) => (
	<section className={styles.root}>
		{trail.map(({ url, title }) => (
			<BreadcrumbsSegment key={url} url={url} title={title} />
		))}
		<span className={styles.title}>{title}</span>
	</section>
)

export default Breadcrumbs
