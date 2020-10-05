import { config, https } from 'firebase-functions'
import Stripe from 'stripe'

const FIRST_LEVEL = 0
const LAST_LEVEL = 11

// @ts-ignore
const stripe = new Stripe(config().stripe.key)
const { onCall, HttpsError } = https

const isValidLevel = (level: any): level is number =>
	typeof level === 'number' && Number.isInteger(level) && level >= FIRST_LEVEL && level <= LAST_LEVEL

export default onCall(async data => {
	switch (data.type) {
		case 'level':
			const { level } = data
			
			if (!isValidLevel(level))
				throw new HttpsError('invalid-argument', 'Invalid level')
			
			const url = `https://codecompetitor.com/levels/level-${level}`
			const session = await stripe.checkout.sessions.create({
				payment_method_types: ['card'],
				line_items: [
					{
						price_data: {
							currency: 'usd',
							product_data: {
								name: `Level ${level}`
							},
							unit_amount: 500
						},
						quantity: 1
					}
				],
				mode: 'payment',
				success_url: `${url}/success`,
				cancel_url: `${url}/cancel`
			})
			
			return session.id
		default:
			throw new HttpsError('invalid-argument', 'Invalid type')
	}
})
