import Layout from 'components/Layout'
import Document, { metadata } from 'documents/index.mdx'

const Home = () => (
	<Layout {...metadata}>
		<Document />
	</Layout>
)

export default Home
