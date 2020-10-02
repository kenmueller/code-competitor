import Head from 'components/Head'
import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/About/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

const About = () => (
	<>
		<Head
			url="https://codecompetitor.com/about"
			title="About Us - Code Competitor"
			description="Explore the story behind Code Competitor and the people dedicated to making it right for you."
		/>
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
