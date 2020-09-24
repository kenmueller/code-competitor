import { GetStaticProps } from 'next'

import { TIER_NAMES } from 'models/TierName'
import getTierData from 'lib/getTierData'

export const getStaticProps: GetStaticProps = async () => ({
	props: {
		tiers: TIER_NAMES.map(getTierData)
	}
})

export { default } from 'components/Courses'
