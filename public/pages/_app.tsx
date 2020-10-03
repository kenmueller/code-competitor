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
				<link key="apple-touch-icon" rel="apple-touch-icon" href="/icons/192x192.png" />
				<link key="manifest" rel="manifest" href="/manifest.webmanifest" />
				<meta key="theme-color" name="theme-color" content="white" />
				<meta key="og-site-name" property="og:site_name" content="Code Competitor" />
				<meta key="og-type" property="og:type" content="website" />
				<meta key="twitter-card" name="twitter:card" content="summary_large_image" />
				<meta key="twitter-site" name="twitter:site" content="@codecompetitor" />
				<meta key="twitter-creator" name="twitter:creator" content="@codecompetitor" />
				<meta key="twitter-domain" name="twitter:domain" content="codecompetitor.com" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default App
