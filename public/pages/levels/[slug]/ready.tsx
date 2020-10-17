import { NextPage, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import Head from 'components/Head'
import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Main from 'components/LevelReady/Main'
import Subscribe from 'components/Subscribe'
import Footer from 'components/Footer'

export interface LevelReadyProps {
	name: string
}

const LevelReady: NextPage<LevelReadyProps> = ({ name }) => {
	const slug = useRouter().query.slug as string
	
	return (
		<>
			<Head
				url={`https://codecompetitor.com/levels/${slug}/ready`}
				title={`Are you ready for ${name}? - Code Competitor`}
				description={`See if you're ready for ${name} at Code Competitor by taking a brief readiness test.`}
			/>
			<Navbar light />
			<Header title={`Are you ready for ${name}?`} />
			<Breadcrumbs
				trail={[
					{ url: '/', title: 'Home' },
					{ url: '/courses', title: 'Courses' },
					{ url: `/levels/${slug}`, title: name }
				]}
				title={`Are you ready for ${name}?`}
			/>
			<Main />
			<Subscribe />
			<Footer />
		</>
	)
}

export default LevelReady

export { default as getStaticPaths } from 'lib/level/getStaticPaths'

export const getStaticProps: GetStaticProps = async ({ params }) => ({
	props: {
		name: require(`articles/levels/${params.slug}/index.mdx`).meta.name
	}
})
