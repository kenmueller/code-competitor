import Head from 'next/head'

import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Info from 'components/Info'

const Home = () => (
	<>
		<Head>
			<title key="title">Code Competitor</title>
		</Head>
		<Navbar />
		<Header />
		<Info />
	</>
)

export default Home
