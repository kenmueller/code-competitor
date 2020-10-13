import { https } from 'firebase-functions'
import Stripe from 'stripe'

import { STRIPE_KEY, BASE_URL, FIRST_LEVEL, LAST_LEVEL, LEVEL_PRICE } from './constants'

// @ts-ignore
const stripe = new Stripe(STRIPE_KEY)
const { onCall, HttpsError } = https

const isValidLevel = (level: any): level is number =>
	typeof level === 'number' && Number.isInteger(level) && level >= FIRST_LEVEL && level <= LAST_LEVEL

export default onCall(async data => {
	switch (data.type) {
		case 'level':
			const { level } = data
			
			if (!isValidLevel(level))
				throw new HttpsError('invalid-argument', 'Invalid level')
			
			const url = `${BASE_URL}/levels/level-${level}`
			
			try {
				const session = await stripe.checkout.sessions.create({
					payment_method_types: ['card'],
					line_items: [
						{
							price_data: {
								currency: 'usd',
								product_data: {
									name: `Level ${level}`
								},
								unit_amount: LEVEL_PRICE
							},
							quantity: 1
						}
					],
					mode: 'payment',
					success_url: `${url}/success`,
					cancel_url: url
				})
				
				return session.id
			} catch (error) {
				throw new HttpsError('internal', error.message)
			}
		default:
			throw new HttpsError('invalid-argument', 'Invalid type')
	}
})
