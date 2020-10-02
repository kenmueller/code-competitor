import NextHead from 'next/head'

export interface HeadProps {
	url: string
	title: string
	description: string
}

const Head = ({ url, title, description }: HeadProps) => (
	<NextHead>
		<link key="canonical" rel="canonical" href={url} />
		<meta key="description" name="description" content={description} />
		<meta key="meta-og-url" property="og:url" content={url} />
		<meta key="meta-og-title" property="og:title" content={title} />
		<meta key="meta-og-description" property="og:description" content={description} />
		<meta key="meta-twitter-title" name="twitter:title" content={title} />
		<meta key="meta-twitter-description" name="twitter:description" content={description} />
		<title key="title">{title}</title>
	</NextHead>
)

export default Head
