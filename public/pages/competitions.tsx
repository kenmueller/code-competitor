import Head from 'next/head'

import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/Competitions/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

const Competitions = () => (
	<>
		<Head>
			<title key="title">
				Competitions - Code Competitor
			</title>
		</Head>
		<Navbar light />
		<Header title="Competitions" />
		<Breadcrumbs
			trail={[{ url: '/', title: 'Home' }]}
			title="Competitions"
		/>
		<Main />
		<Subscribe />
		<Footer />
	</>
)

export default Competitions
