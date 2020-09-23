import Head from 'next/head'

import Navbar from 'components/Navbar'
import Header from 'components/Home/Header'
import Info from 'components/Home/Info'
import Description from 'components/Home/Description'
import Classes from 'components/Home/Classes'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

const Home = () => (
	<>
		<Head>
			<title key="title">
				Code Competitor
			</title>
		</Head>
		<Navbar />
		<Header />
		<Info />
		<Description />
		<Classes />
		<Subscribe />
		<Footer />
	</>
)

export default Home
