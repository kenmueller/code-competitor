import Head from 'next/head'

import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/FAQ/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

const FAQ = () => (
	<>
		<Head>
			<title key="title">
				Frequently Asked Questions - Code Competitor
			</title>
		</Head>
		<Navbar light />
		<Header title="Frequently Asked Questions" />
		<Breadcrumbs
			trail={[{ url: '/', title: 'Home' }]}
			title="FAQ"
		/>
		<Main />
		<Subscribe />
		<Footer />
	</>
)

export default FAQ
