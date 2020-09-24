import Ages from './Ages'

export default interface Level {
	slug: string
	name: string
	subtitle: string
	usacoLevel: string
	ages: Ages
	bookRequired: boolean
}
