import { GetStaticProps } from 'next'
import { readdirSync } from 'fs'
import { join } from 'path'

import Head from 'components/Head'
import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/FAQ/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

export interface FAQProps {
	questions: string[]
}

const FAQ = ({ questions }: FAQProps) => (
	<>
		<Head
			url="https://codecompetitor.com/faq"
			title="Frequently Asked Questions - Code Competitor"
			description="View the frequently asked questions about Code Competitor. Ask your own!"
		/>
		<Navbar light />
		<Header title="Frequently Asked Questions" />
		<Breadcrumbs
			trail={[{ url: '/', title: 'Home' }]}
			title="FAQ"
		/>
		<Main questions={questions} />
		<Subscribe />
		<Footer />
	</>
)

export default FAQ

export const getStaticProps: GetStaticProps = async () => ({
	props: {
		questions: readdirSync(join(process.cwd(), 'articles/faq'))
			.map(path => path.replace(/\.mdx$/, ''))
	}
})
