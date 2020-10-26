import { useMemo } from 'react'
import NextHead from 'next/head'
import { Thing } from 'schema-dts'

import share from 'images/logos/share.jpg'

const DEFAULT_DATA: Thing[] = [
	{
		'@type': 'WebSite',
		url: 'https://codecompetitor.com',
		name: 'Code Competitor',
		description: 'From 0 to Competitive. Creating apps won\'t get you into a Top University. Placing in a Coding Competition can.',
		inLanguage: 'en-US'
	},
	{
		'@type': 'Organization',
		url: 'https://codecompetitor.com',
		logo: {
			'@type': 'ImageObject',
			url: `https://codecompetitor.com${share.src}`,
			width: `${share.width}px`,
			height: `${share.height}px`
		}
	}
]

export interface HeadProps<Data> {
	url: string
	image?: string
	title: string
	description: string
	data?: Data
}

const Head = <Data extends Thing[] = []>({
	url,
	image: _image,
	title,
	description,
	data = [] as Data
}: HeadProps<Data>) => {
	const image = _image ?? share.src
	
	const html = useMemo(() => ({
		__html: JSON.stringify({
			'@context': 'https://schema.org',
			'@graph': [...DEFAULT_DATA, ...data]
		})
	}), [data])
	
	return (
		<NextHead>
			<link key="canonical" rel="canonical" href={url} />
			<meta key="description" name="description" content={description} />
			<meta key="og-url" property="og:url" content={url} />
			<meta key="og-image" property="og:image" content={image} />
			<meta key="og-title" property="og:title" content={title} />
			<meta key="og-description" property="og:description" content={description} />
			<meta key="twitter-image" name="twitter:image" content={image} />
			<meta key="twitter-title" name="twitter:title" content={title} />
			<meta key="twitter-description" name="twitter:description" content={description} />
			<script key="data" type="application/ld+json" dangerouslySetInnerHTML={html} />
			<title key="title">{title}</title>
		</NextHead>
	)
}

export default Head
