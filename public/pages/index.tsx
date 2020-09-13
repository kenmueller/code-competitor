import Head from 'next/head'

import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Info from 'components/Info'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

const Home = () => (
	<>
		<Head>
			<title key="title">Code Competitor</title>
		</Head>
		<Navbar />
		<Header />
		<Info />
		<Subscribe />
		<Footer />
	</>
)

export default Home
