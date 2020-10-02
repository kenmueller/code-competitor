import Head from 'components/Head'
import Navbar from 'components/Navbar'
import Header from 'components/Home/Header'
import Info from 'components/Home/Info'
import Description from 'components/Home/Description'
import Classes from 'components/Home/Classes'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

const Home = () => (
	<>
		<Head
			url="https://codecompetitor.com"
			title="Code Competitor"
			description="From 0 to Competitive. Creating apps won't get you into a Top University. Placing in a Coding Competition can."
		/>
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
