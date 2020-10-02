import Head from 'components/Head'
import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/Terms/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

const Terms = () => (
	<>
		<Head
			url="https://codecompetitor.com/terms"
			title="Terms of Service - Code Competitor"
			description="Explore Code Competitor's terms of service."
		/>
		<Navbar light />
		<Header title="Terms of Service" />
		<Breadcrumbs
			trail={[{ url: '/', title: 'Home' }]}
			title="Terms"
		/>
		<Main />
		<Subscribe />
		<Footer />
	</>
)

export default Terms
