export const TIER_NAMES = ['bronze', 'silver', 'gold', 'platinum'] as const

type TierName = (typeof TIER_NAMES)[number]

export default TierName
