import Head from 'next/head'

import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/About/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

const About = () => (
	<>
		<Head>
			<title key="title">
				About Us - Code Competitor
			</title>
		</Head>
		<Navbar light />
		<Header title="About Us" />
		<Breadcrumbs
			trail={[{ url: '/', title: 'Home' }]}
			title="About Us"
		/>
		<Main />
		<Subscribe />
		<Footer />
	</>
)

export default About
