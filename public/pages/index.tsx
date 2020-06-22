import Layout from 'components/Layout'
import Document, { title } from 'documents/index.mdx'

const Home = () => (
	<Layout title={title}>
		<Document />
	</Layout>
)

export default Home
