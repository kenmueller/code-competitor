import { GetStaticPaths, GetStaticProps } from 'next'

import { TIER_NAMES } from 'models/TierName'
import getTierData from 'lib/getTierData'

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: TIER_NAMES.map(tier => ({
		params: { tier }
	})),
	fallback: false
})

export const getStaticProps: GetStaticProps = async ({ params }) => ({
	props: {
		tiers: [getTierData(params.tier as string)]
	}
})

export { default } from 'components/Courses'
