import { useEffect } from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'

import identifyHubSpotUser from 'lib/identifyHubSpotUser'
import { src as icon } from 'images/logos/icon.png'

import 'styles/global.scss'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	useEffect(() => {
		const email = localStorage.getItem('email')
		
		if (email)
			identifyHubSpotUser(email)
	}, [])
	
	return (
		<>
			<Head>
				<link key="gstatic-preconnect" rel="preconnect" href="https://fonts.gstatic.com" />
				<link key="fonts-preconnect" rel="preconnect" href="https://fonts.googleapis.com" />
				<link key="hubspot-scripts-preconnect" rel="preconnect" href="https://js.hs-scripts.com" />
				<link key="hubspot-banner-preconnect" rel="preconnect" href="https://js.hs-banner.com" />
				<link key="hubspot-api-preconnect" rel="preconnect" href="https://api.hubspot.com" />
				<link key="hubspot-forms-preconnect" rel="preconnect" href="https://forms.hubspot.com" />
				<link key="bam-nr-data-preconnect" rel="preconnect" href="https://bam.nr-data.net" />
				<link key="js-agent-newrelic-preconnect" rel="preconnect" href="https://js-agent.newrelic.com" />
				<link
					key="muli-font"
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Muli:wght@400;700;900&display=swap"
				/>
				<link key="sitemap" rel="sitemap" type="application/xml" href="/sitemap.xml" />
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
			<ToastContainer />
		</>
	)
}

export default App
