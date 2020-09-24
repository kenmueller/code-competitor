import Ages from './Ages'
import Level from './Level'

export default interface Tier {
	slug: string
	title: string
	ages: Ages
	levels: Level[]
}
