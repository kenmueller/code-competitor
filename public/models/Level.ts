import Ages from './Ages'

export default interface Level {
	slug: string
	name: string
	subtitle: string
	price: number
	usacoLevel: string
	ages: Ages
	bookRequired: boolean
}
