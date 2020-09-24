export default interface Job {
	slug: string
	name: string
}

export interface JobCategory {
	slug: string
	name: string
	jobs: Job[]
}
