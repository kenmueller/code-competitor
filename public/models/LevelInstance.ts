import Day from './Day'

export default interface LevelInstance {
	id: string
	days: Day[]
	start: Date
	weeks: number
	time: string
	instructor: string
	spots: number
}
