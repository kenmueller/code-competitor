import { NextPage } from 'next'

import Head from 'components/Head'
import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/Competitions/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

const Competitions: NextPage = () => (
	<>
		<Head
			url="https://codecompetitor.com/competitions"
			title="Competitions - Code Competitor"
			description="View upcoming code competitions, where they're located, and what you can do to prepare."
		/>
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
