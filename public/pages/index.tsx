import Head from 'next/head'

import Navbar from 'components/Navbar'
import Header from 'components/Header'

const Home = () => (
	<>
		<Head>
			<title key="title">Code Competitor</title>
		</Head>
		<Navbar />
		<Header />
	</>
)

export default Home
