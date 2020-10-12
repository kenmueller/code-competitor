import { useRouter } from 'next/router'

import Head from 'components/Head'
import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Main from 'components/404/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

const NotFound = () => {
	const path = useRouter().asPath
	
	return (
		<>
			<Head
				url={`https://codecompetitor.com${path}`}
				title="404 - Code Competitor"
				description="Oh no! Are you lost?"
			/>
			<Navbar light />
			<Header title="404" />
			<Main />
			<Subscribe />
			<Footer />
		</>
	)
}

export default NotFound
