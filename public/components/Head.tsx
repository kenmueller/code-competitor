import NextHead from 'next/head'

import { src as share } from 'images/logos/share.jpg'

export interface HeadProps {
	url: string
	image?: string
	title: string
	description: string
}

const Head = ({ url, image: _image, title, description }: HeadProps) => {
	const image = _image ?? share
	
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
			<title key="title">{title}</title>
		</NextHead>
	)
}

export default Head
