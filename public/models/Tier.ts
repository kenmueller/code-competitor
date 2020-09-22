export interface TierAges {
	min: number
	max: number
}

export interface TierCourse {
	name: string
	slug: string
	ages: TierAges
	book: boolean
}

export default interface Tier {
	title: string
	description: string
	ages: TierAges
	courses: TierCourse[]
}
