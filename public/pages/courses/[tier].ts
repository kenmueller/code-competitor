import { GetStaticPaths, GetStaticProps } from 'next'

import { TIER_NAMES } from 'models/TierName'

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: TIER_NAMES.map(tier => ({
		params: { tier }
	})),
	fallback: false
})

export const getStaticProps: GetStaticProps = async () => ({
	props: {}
})

export { default } from 'components/Courses'
