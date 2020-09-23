import Head from 'next/head'

import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/Terms/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

const Terms = () => (
	<>
		<Head>
			<title key="title">
				Terms of Service - Code Competitor
			</title>
		</Head>
		<Navbar light />
		<Header title="Terms of Service" />
		<Breadcrumbs
			trail={[{ url: '/', title: 'Home' }]}
			title="Terms"
		/>
		<Main />
		<Subscribe />
		<Footer />
	</>
)

export default Terms
