import Head from 'next/head'

import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Article from 'components/Article'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'
import Content from 'articles/about.mdx'

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
		<Article>
			<Content />
		</Article>
		<Subscribe />
		<Footer />
	</>
)

export default About
