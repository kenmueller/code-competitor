import { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import identifyHubSpotUser from 'lib/identifyHubSpotUser'
import { src as icon } from 'images/logos/icon.png'

import 'styles/global.scss'

const App = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		const email = localStorage.getItem('email')
		
		if (email)
			identifyHubSpotUser(email)
	}, [])
	
	return (
		<>
			<Head>
				<link
					key="font-preconnect"
					rel="preconnect"
					href="https://fonts.gstatic.com"
				/>
				<link
					key="muli-font"
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Muli:wght@400;700;900&display=swap"
				/>
				<link key="icon" rel="icon" href={icon} />
				<meta key="meta-og-site-name" property="og:site_name" content="Code Competitor" />
				<meta key="meta-og-type" property="og:type" content="website" />
				<meta key="meta-twitter-card" name="twitter:card" content="summary_large_image" />
				<meta key="meta-twitter-site" name="twitter:site" content="@codecompetitor" />
				<meta key="meta-twitter-creator" name="twitter:creator" content="@codecompetitor" />
				<meta key="meta-twitter-domain" name="twitter:domain" content="codecompetitor.com" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default App
